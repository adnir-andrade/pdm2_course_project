import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { Campaign } from "../schemas/Campaign";
import { api } from "../services/api";

export const useCampaigns = (userId: string, token: string) => {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getCampaignsByUser = async () => {
    setLoading(true);
    try {
      const response = await api.get<{ items: Campaign[] }>(
        `/api/collections/campaigns/records?filter=(dm_id='${userId}')`,
        {
          headers: {
            Authorization: token,
          },
        },
      );

      if (response.data.items) {
        setCampaigns(response.data.items);
      } else {
        Alert.alert("No campaigns found.");
      }
    } catch (error) {
      Alert.alert("An error occurred while fetching campaigns.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userId) {
      getCampaignsByUser();
    }
  }, [userId, token]);

  return { campaigns, loading };
};
