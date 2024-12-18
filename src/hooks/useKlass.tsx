import { useEffect, useState } from "react";
import { api } from "../services/api";

export const useKlass = (klass_id: string) => {
  const [klassName, setKlassName] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchKlassName = async () => {
      try {
        const response = await api.get(
          `/api/collections/klasses/records/${klass_id}`,
        );
        setKlassName(response.data.name);
      } catch (error) {
        console.error("Failed to fetch klass name", error);
        setKlassName(null);
      } finally {
        setLoading(false);
      }
    };

    fetchKlassName();
  }, [klass_id]);

  return { klassName, loading };
};
