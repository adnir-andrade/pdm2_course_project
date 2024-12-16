import { Alert, Pressable, View } from "react-native";
import React, { useState } from "react";
import Text from "../../../../../../common/components/Text";
import Input from "../../../../../../common/components/Input";
import Dropdown from "../../../../../../common/components/Dropdown";
import Button from "../../../../../../common/components/Button";
import { characterSchema } from "../../../../../../schemas/Character";

type Props = {
  onPress: () => void;
};

const genderOptions = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
  { label: "Other", value: "other" },
];

const classOptions = [
  { label: "Barbarian", value: 0 },
  { label: "Bard", value: 1 },
  { label: "Cleric", value: 2 },
  { label: "Druid", value: 3 },
  { label: "Fighter", value: 4 },
  { label: "Monk", value: 5 },
  { label: "Paladin", value: 6 },
  { label: "Ranger", value: 7 },
  { label: "Rogue", value: 8 },
  { label: "Sorcerer", value: 9 },
  { label: "Warlock", value: 10 },
  { label: "Wizard", value: 11 },
];

const raceOptions = [
  { label: "Dwarf", value: 0 },
  { label: "Elf", value: 1 },
  { label: "Halfling", value: 2 },
  { label: "Human", value: 3 },
  { label: "Dragonborn", value: 4 },
  { label: "Gnome", value: 5 },
  { label: "Half-Elf", value: 6 },
  { label: "Half-Orc", value: 7 },
  { label: "Tiefling", value: 8 },
];

export default function CreateCharacter({ onPress }: Props) {
  const [characterName, setCharacterName] = useState<string>("");
  const [selectedGender, setSelectedGender] = useState<string | number | null>(
    null,
  );
  const [selectedClass, setSelectedClass] = useState<string | number | null>(
    null,
  );
  const [selectedRace, setSelectedRace] = useState<string | number | null>(
    null,
  );

  const handleCreateCharacter = () => {
    const data = {
      id: 1,
      player_id: 1,
      name: characterName,
      level: 1,
      gender: selectedGender,
      race_id: selectedRace,
      klass_id: selectedClass,
    };

    const result = characterSchema.safeParse(data);

    if (!result.success) {
      const errors = result.error.format();
      let errorMessage = "";
      if (errors.name?._errors) {
        errorMessage += `Name can't be blank\n`;
      }
      if (errors.race_id?._errors) {
        errorMessage += `Must select a race\n`;
      }
      if (errors.klass_id?._errors) {
        errorMessage += `Must select a class\n`;
      }
      Alert.alert("Ops!", errorMessage.trim());
      return;
    }

    console.log("Creating character!");
    console.log(`Name: ${characterName}`);
    console.log(`Gender: ${selectedGender}`);
    console.log(`Race: ${selectedRace}`);
    console.log(`Class: ${selectedClass}`);
  };

  return (
    <View className="flex-1 justify-center items-center bg-black/75">
      <View className="bg-themys p-6 rounded-card-8 h-[80%] w-[90%] overflow-hidden">
        <View className={`basis-1/12`}>
          <Pressable onPress={onPress} className="mt-4">
            <Text className="text-themys-tussock text-2xl font-cinzel-bold text-right">
              X
            </Text>
          </Pressable>
        </View>
        <Input
          label={"Name"}
          value={characterName}
          onChangeText={setCharacterName}
        />
        <View className={`mt-6`}>
          <Dropdown
            label={"Gender"}
            placeholder={"Select Gender"}
            options={genderOptions}
            selectedValue={selectedGender}
            setterHandler={setSelectedGender}
          />
        </View>
        <View className={`mt-6`}>
          <Dropdown
            label={"Class"}
            placeholder={"Choose a Class"}
            options={classOptions}
            selectedValue={selectedClass}
            setterHandler={setSelectedClass}
          />
        </View>
        <View className={`mt-6`}>
          <Dropdown
            label={"Race"}
            placeholder={"Choose a Race"}
            options={raceOptions}
            selectedValue={selectedRace}
            setterHandler={setSelectedRace}
          />
        </View>
        <View className={`mt-12`}>
          <Button.Rectangular onPress={handleCreateCharacter}>
            <Text>Create Character</Text>
          </Button.Rectangular>
        </View>
      </View>
    </View>
  );
}
