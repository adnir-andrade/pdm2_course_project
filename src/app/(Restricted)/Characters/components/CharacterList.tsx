import { FlatList } from "react-native";
import React from "react";
import AddCharacter from "./AddCharacter";
import { CharacterItem } from "./CharacterItem";
import { characters } from "../../../../mocks/MOCK_CHARACTER";

export default function CharacterList() {
  return (
    <FlatList
      data={characters}
      renderItem={({ item }) => <CharacterItem item={item} />}
      keyExtractor={(item) => item.id.toString()}
      className="flex-1"
      showsVerticalScrollIndicator={false}
      ListFooterComponent={() => <AddCharacter />}
    />
  );
}
