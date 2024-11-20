import { useEffect } from "react";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.dismissAll();
    router.replace("/_navigation/");
  }, [router]);

  return null;
}
