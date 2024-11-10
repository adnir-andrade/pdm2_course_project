import { FlatList, View } from "react-native";
import React from "react";
import { characters } from "../../../../mocks/MOCK_CHARACTER";
import Button from "../../../../common/components/Button";
import { formatDescription } from "../services/subtitleService";

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

  return (
    <View className="flex-1 px-7 pt-10">
      <FlatList
        data={characters}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        className="flex-1"
        showsVerticalScrollIndicator={false}
        ListFooterComponent={() => (
          <View className="mb-16">
            <Button.Slim
              title="New Character"
              onPress={() => console.log(`Add Character`)}
            />
          </View>
        )}
      />
    </View>
  );
}
