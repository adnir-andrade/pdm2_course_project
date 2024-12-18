import { useState } from "react";
import { api } from "../services/api";
import { Character } from "../schemas/Character";

export const useCreateCharacter = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const createCharacter = async (
    data: Character,
    token: string,
  ): Promise<Character | null> => {
    setLoading(true);
    setError(null);

    try {
      const response = await api.post<Character>(
        "/api/collections/characters/records",
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

  return { createCharacter, loading, error };
};
