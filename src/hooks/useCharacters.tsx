import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { api } from "../services/api";
import { Character } from "../schemas/Character";

export const useCharacters = (
  userId: string,
  campaignId: string,
  token: string,
) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getCharactersByCampaignUser = async () => {
    setLoading(true);
    console.log("Player Id: ", userId);
    console.log("Campaign Id: ", campaignId);
    try {
      const response = await api.get<{ items: Character[] }>(
        `/api/collections/characters/records?filter=(player_id='${userId}')`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (response.data.items) {
        const filteredCharacters = response.data.items.filter(
          (character) => character.campaign_id === campaignId,
        );
        setCharacters(filteredCharacters);

        if (filteredCharacters.length === 0) {
          Alert.alert("No characters found in this campaign.");
        }
      } else {
        Alert.alert("No characters found.");
      }
    } catch (error) {
      Alert.alert("An error occurred while fetching characters.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userId && campaignId) {
      getCharactersByCampaignUser();
    }
  }, [userId, campaignId, token]);

  return { characters, loading };
};
