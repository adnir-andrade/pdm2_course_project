import { ActivityIndicator, FlatList, View } from "react-native";
import React from "react";
import AddCharacter from "./AddCharacter";
import { CharacterItem } from "./CharacterItem";
import useUserState from "../../../../../states/useUserState";
import { useCharacters } from "../../../../../hooks/useCharacters";
import useCampaignState from "../../../../../states/useCampaignState";

export default function CharacterList() {
  const { userId, token } = useUserState();
  const { campaign } = useCampaignState();
  const { characters, loading, getCharactersByCampaignUser } = useCharacters(
    userId,
    campaign!.id,
    token!,
  );

  const refreshCharacters = async () => {
    await getCharactersByCampaignUser();
  };

  if (loading) {
    return (
      <View className={`flex-1 centralized bg-black`}>
        <ActivityIndicator size={`large`} />
      </View>
    );
  }

  return (
    <FlatList
      data={characters}
      renderItem={({ item }) => <CharacterItem item={item} />}
      keyExtractor={(item) => item.id!}
      className="flex-1"
      showsVerticalScrollIndicator={false}
      ListFooterComponent={() => (
        <AddCharacter onCharacterCreated={refreshCharacters} />
      )}
    />
  );
}
