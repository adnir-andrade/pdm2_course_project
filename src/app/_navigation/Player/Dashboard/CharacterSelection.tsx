import { useEffect } from "react";
import { useRouter } from "expo-router";

export default function CharacterSelection() {
  const router = useRouter();

  useEffect(() => {
    router.dismiss();
  }, [router]);

  return null;
}
