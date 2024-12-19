import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { api } from "../services/api";
import { Item } from "../schemas/Item";

export const useItems = (characterId: string, token: string) => {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getItemsByCharacter = async () => {
    setLoading(true);
    try {
      const response = await api.get<{ items: Item[] }>(
        `/api/collections/items/records?filter=(character_id='${characterId}')`,
        {
          headers: {
            Authorization: token,
          },
        },
      );

      if (response.data.items) {
        setItems(response.data.items);
      } else {
        Alert.alert("No items found.");
      }
    } catch (error) {
      Alert.alert("An error occurred while fetching campaigns.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (characterId) {
      getItemsByCharacter();
    }
  }, [characterId, token]);

  return { items, loading };
};
