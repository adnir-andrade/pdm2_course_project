import React from "react";
import { View } from "react-native";
import Button from "../../../../../common/components/Button";
import { useRouter } from "expo-router";
import { Character } from "../../../../../schemas/Character";
import { useRace } from "../../../../../hooks/useRace";
import { useKlass } from "../../../../../hooks/useKlass";

type CharacterItemProps = {
  item: Character;
};

export const CharacterItem = ({ item }: CharacterItemProps) => {
  const router = useRouter();
  const { raceName } = useRace(item.race_id);
  const { klassName } = useKlass(item.klass_id);

  const mainButtonHandler = (id: string) => {
    console.log(`Main click ${id}`);
    router.push("_navigation/Player/Dashboard");
  };

  return (
    <View className="mb-8 w-full">
      <Button.Robust
        title={item.name}
        subtitle={`${raceName}, Lv ${item.level.toString()} | ${klassName}`}
        onPressMain={() => mainButtonHandler(item.id!)}
        onPressOptions={() => console.log(`Options Click ${item.id}`)}
      />
    </View>
  );
};
