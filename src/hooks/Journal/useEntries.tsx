import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { Entry } from "../../schemas/Entry";
import { api } from "../../services/api";

export const useEntries = (characterId: string, token: string) => {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [refreshFlag, setRefreshFlag] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const getEntriesByCharacter = async () => {
    setLoading(true);
    try {
      const response = await api.get<{ items: Entry[] }>(
        `/api/collections/entries/records?filter=(character_id='${characterId}')`,
        {
          headers: {
            Authorization: token,
          },
        },
      );

      if (response.data.items) {
        setEntries(response.data.items);
        return response.data.items;
      } else {
        Alert.alert("No entries found.");
      }
    } catch (error) {
      Alert.alert("An error occurred while fetching entries.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getEntryById = async (entryId: string) => {
    setLoading(true);
    try {
      const response = await api.get<{ items: Entry }>(
        `/api/collections/entries/records/${entryId}`,
        {
          headers: {
            Authorization: token,
          },
        },
      );

      return response.data.items;
    } catch (error) {
      Alert.alert("An error occurred while fetching the entry.");
      console.error(error);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const createEntry = async (entryData: Omit<Entry, "id">) => {
    setLoading(true);
    try {
      const response = await api.post<{ entry: Entry }>(
        `/api/collections/entries/records`,
        entryData,
        {
          headers: {
            Authorization: token,
          },
        },
      );

      return response.data.entry;
    } catch (error) {
      Alert.alert("An error occurred while creating the entry.");
      console.error(error);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const updateEntry = async (entryId: string, entryData: Partial<Entry>) => {
    setLoading(true);
    try {
      const response = await api.put<{ item: Entry }>(
        `/api/collections/entries/records/${entryId}`,
        entryData,
        {
          headers: {
            Authorization: token,
          },
        },
      );

      return response.data.item;
    } catch (error) {
      Alert.alert("An error occurred while updating the entry.");
      console.error(error);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const deleteEntry = async (entryId: string) => {
    setLoading(true);
    try {
      await api.delete(`/api/collections/entries/records/${entryId}`, {
        headers: {
          Authorization: token,
        },
      });

      return true;
    } catch (error) {
      Alert.alert("An error occurred while deleting the entry.");
      console.error(error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (characterId) {
      getEntriesByCharacter();
    }
  }, [characterId, token, refreshFlag]);

  return {
    entries,
    loading,
    getEntriesByCharacter,
    getEntryById,
    createEntry,
    updateEntry,
    deleteEntry,
    refreshFlag,
    setRefreshFlag,
  };
};
