import { useState } from "react";
import { api } from "../services/api";
import { Campaign } from "../schemas/Campaign";

export const useCreateCampaign = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const createCampaign = async (
    data: Omit<Campaign, "id">,
    token: string,
  ): Promise<Campaign | null> => {
    setLoading(true);
    setError(null);

    try {
      const response = await api.post<Campaign>(
        "/api/collections/campaigns/records",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        },
      );

      return response.data;
    } catch (err: any) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { createCampaign, loading, error };
};
