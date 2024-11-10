import { FlatList, View } from "react-native";
import React from "react";
import { characters } from "../../../../mocks/MOCK_CHARACTER";
import Text from "../../../../common/components/Text";

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
    <View className="p-4 border-b border-gray-300">
      <Text
        className="text-3xl font-cinzel-decorative-black text-themys-straw"
        adjustsFontSizeToFit={true}
        numberOfLines={1}
      >
        {item.name}
      </Text>
      <Text className="text-lg">Level: {item.level.toString()}</Text>
      <Text className="text-lg">Class ID: {item.klass_id.toString()}</Text>
      <Text className="text-lg">Race ID: {item.race_id.toString()}</Text>
    </View>
  );

  return (
    <View className="flex-1 px-7 pt-3">
      <FlatList
        data={characters}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        className="flex-1"
      />
    </View>
  );
}
