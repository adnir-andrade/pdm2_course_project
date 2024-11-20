import React from "react";
import { View } from "react-native";
import Button from "../../../../../common/components/Button";
import { formatDescription } from "../services/subtitleService";

type CharacterData = {
  id: number;
  name: string;
  level: number;
  gender: string;
  race_id: number;
  klass_id: number;
};

type CharacterItemProps = {
  item: CharacterData;
};

export const CharacterItem = ({ item }: CharacterItemProps) => {
  return (
    <View className="mb-8 w-full">
      <Button.Robust
        title={item.name}
        subtitle={formatDescription(item.race_id, item.level, item.klass_id)}
        onPressMain={() => console.log(`Main click ${item.id}`)}
        onPressOptions={() => console.log(`Options Click ${item.id}`)}
      />
    </View>
  );
};
