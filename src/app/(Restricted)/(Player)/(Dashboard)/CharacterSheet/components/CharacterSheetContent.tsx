import { View } from "react-native";
import React from "react";
import Text from "../../../../../../common/components/Text";
import { Character } from "../../../../../../schemas/Character";

type Props = {
  character: Character;
};

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

const getRaceName = (id: number): string => {
  const race = raceOptions.find((race) => race.value === id);
  return race ? race.label : "Unknown Race";
};

const getKlassName = (id: number): string => {
  const klass = classOptions.find((klass) => klass.value === id);
  return klass ? klass.label : "Unknown Class";
};

export default function CharacterSheetContent({ character }: Props) {
  return (
    <View className={`flex-1`}>
      <View className={`items-center py-10 px-8`}>
        <View className={`w-full px-4`}>
          <Text className={`text-center text-peach text-xl`}>
            {`${character.name}, the ${getRaceName(character.race_id)}`}
          </Text>
          <Text className={`text-center text-simple text-xl`}>
            {`Lv ${character.level} ${getKlassName(character.klass_id)}`}
          </Text>
        </View>
      </View>
    </View>
  );
}
