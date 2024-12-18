import { useEffect, useState } from "react";
import { api } from "../services/api"; // Assumindo que você tenha uma configuração de API

export const useRace = (race_id: string) => {
  const [raceName, setRaceName] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchRaceName = async () => {
      try {
        const response = await api.get(
          `/api/collections/races/records/${race_id}`,
        );
        setRaceName(response.data.name);
      } catch (error) {
        console.error("Failed to fetch race name", error);
        setRaceName(null);
      } finally {
        setLoading(false);
      }
    };

    fetchRaceName();
  }, [race_id]);

  return { raceName, loading };
};
