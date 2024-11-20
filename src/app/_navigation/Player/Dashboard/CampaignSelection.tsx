import { useEffect } from "react";
import { useRouter } from "expo-router";

export default function CampaignSelection() {
  const router = useRouter();

  useEffect(() => {
    router.dismissAll();
    router.replace("_navigation/Player");
  }, [router]);

  return null;
}
