import { Alert, Pressable, ScrollView, View } from "react-native";
import React, { useState } from "react";
import Text from "../../../../../../common/components/Text";
import Input from "../../../../../../common/components/Input";
import Dropdown from "../../../../../../common/components/Dropdown";
import Button from "../../../../../../common/components/Button";
import { characterSchema } from "../../../../../../schemas/Character";
import { useCreateCharacter } from "../../../../../../hooks/useCreateCharacter";
import useUserState from "../../../../../../states/useUserState";
import useCampaignState from "../../../../../../states/useCampaignState";

type Props = {
  closeModalCallback: () => void;
  onCharacterCreated: () => void;
};

const genderOptions = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
  { label: "Other", value: "other" },
];

const classOptions = [
  { label: "Barbarian", value: "1" },
  { label: "Bard", value: "2" },
  { label: "Cleric", value: "3" },
  { label: "Druid", value: "4" },
  { label: "Fighter", value: "5" },
  { label: "Monk", value: "6" },
  { label: "Paladin", value: "7" },
  { label: "Ranger", value: "8" },
  { label: "Rogue", value: "9" },
  { label: "Sorcerer", value: "10" },
  { label: "Warlock", value: "11" },
  { label: "Wizard", value: "12" },
];

const raceOptions = [
  { label: "Dragonborn", value: "1" },
  { label: "Dwarf", value: "2" },
  { label: "Elf", value: "3" },
  { label: "Gnome", value: "4" },
  { label: "Half-Elf", value: "5" },
  { label: "Half-Orc", value: "6" },
  { label: "Halfling", value: "7" },
  { label: "Human", value: "8" },
  { label: "Tiefling", value: "9" },
];

export default function CreateCharacter({
  closeModalCallback,
  onCharacterCreated,
}: Props) {
  const { userId, token } = useUserState();
  const { campaign } = useCampaignState();
  const { createCharacter } = useCreateCharacter();
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

  const handleCreateCharacter = async () => {
    const data = {
      player_id: userId,
      name: characterName,
      level: 1,
      race_id: selectedRace,
      klass_id: selectedClass,
      campaign_id: campaign?.id,
      gender: selectedGender,
    };

    console.log(data);

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

    const character = {
      player_id: data.player_id,
      name: data.name,
      level: 1,
      race_id: data.race_id!.toString(),
      klass_id: selectedClass!.toString(),
      campaign_id: campaign!.id,
      gender: selectedGender?.toString(),
    };

    await createCharacter(character, token!);
    onCharacterCreated();
  };

  return (
    <View className="flex-1 justify-center items-center bg-black/75">
      <View className="bg-themys p-6 rounded-card-8 h-[80%] w-[90%] overflow-hidden">
        <View className={`basis-1/12`}>
          <Pressable onPress={closeModalCallback} className="mt-4">
            <Text className="text-themys-tussock text-2xl font-cinzel-bold text-right">
              X
            </Text>
          </Pressable>
        </View>
        <ScrollView className={`basis-full`}>
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
              label={"Race"}
              placeholder={"Choose a Race"}
              options={raceOptions}
              selectedValue={selectedRace}
              setterHandler={setSelectedRace}
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

          <View className={`mt-12`}>
            <Button.Rectangular onPress={handleCreateCharacter}>
              <Text>Create Character</Text>
            </Button.Rectangular>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
