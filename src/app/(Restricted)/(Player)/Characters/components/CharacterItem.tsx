import React from "react";
import { View } from "react-native";
import Button from "../../../../../common/components/Button";
import { formatDescription } from "../services/subtitleService";
import { useRouter } from "expo-router";
import { Character } from "../../../../../schemas/Character";

type CharacterItemProps = {
  item: Character;
};

export const CharacterItem = ({ item }: CharacterItemProps) => {
  const router = useRouter();

  const mainButtonHandler = (id: string) => {
    console.log(`Main click ${id}`);
    router.push("_navigation/Player/Dashboard");
  };

  return (
    <View className="mb-8 w-full">
      <Button.Robust
        title={item.name}
        subtitle={formatDescription(item.race_id, item.level, item.klass_id)}
        onPressMain={() => mainButtonHandler(item.id)}
        onPressOptions={() => console.log(`Options Click ${item.id}`)}
      />
    </View>
  );
};
