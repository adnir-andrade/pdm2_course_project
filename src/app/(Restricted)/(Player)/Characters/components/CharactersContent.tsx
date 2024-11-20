import { View } from "react-native";
import React from "react";
import CharacterList from "./CharacterList";

export default function CharactersContent() {
  return (
    <View className="flex-1 px-7 pt-10">
      <CharacterList />
    </View>
  );
}
