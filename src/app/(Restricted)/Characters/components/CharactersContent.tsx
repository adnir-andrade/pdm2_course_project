import { FlatList, View } from "react-native";
import React from "react";
import { characters } from "../../../../mocks/MOCK_CHARACTER";
import Button from "../../../../common/components/Button";

type CharacterData = {
  id: number;
  name: string;
  level: number;
  gender: string;
  race_id: number;
  klass_id: number;
};

export default function CharactersContent() {
  const renderItem = ({ item }: { item: CharacterData }) => (
    <View className="mb-8 w-full">
      <Button.Robust
        title={item.name}
        subtitle={formatDescription(item.race_id, item.level, item.klass_id)}
        onPressMain={() => console.log(`Main click ${item.id}`)}
        onPressOptions={() => console.log(`Options Click ${item.id}`)}
      />
    </View>
  );

  //TODO: After API implementation, change this function to use race and klass names
  const formatDescription = (
    race_id: number,
    level: number,
    klass_id: number,
  ): string => {
    return `${getRaceName(race_id)}, Lv ${level.toString()} | ${getClassName(klass_id)}`;
  };

  //TODO: After API implementation, remove these two functions
  const getRaceName = (race_id: number): string => {
    switch (race_id) {
      case 1:
        return "Dwarf";
      case 2:
        return "Elf";
      case 3:
        return "Halfling";
      case 4:
        return "Human";
      case 5:
        return "Dragonborn";
      case 6:
        return "Gnome";
      case 7:
        return "Half-Elf";
      case 8:
        return "Half-Orc";
      case 9:
        return "Tiefling";
      default:
        return "Unknown Race";
    }
  };

  const getClassName = (klass_id: number): string => {
    switch (klass_id) {
      case 1:
        return "Barbarian";
      case 2:
        return "Bard";
      case 3:
        return "Cleric";
      case 4:
        return "Druid";
      case 5:
        return "Fighter";
      case 6:
        return "Monk";
      case 7:
        return "Paladin";
      case 8:
        return "Ranger";
      case 9:
        return "Rogue";
      case 10:
        return "Sorcerer";
      case 11:
        return "Warlock";
      case 12:
        return "Wizard";
      default:
        return "Unknown Class";
    }
  };

  return (
    <View className="flex-1 px-7 pt-10">
      <FlatList
        data={characters}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        className="flex-1"
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
