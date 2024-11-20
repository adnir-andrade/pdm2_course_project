import { useEffect } from "react";
import { useRouter } from "expo-router";

export default function LogOut() {
  const router = useRouter();

  useEffect(() => {
    router.dismissAll();
    router.replace("/");
  }, [router]);

  return null;
}
