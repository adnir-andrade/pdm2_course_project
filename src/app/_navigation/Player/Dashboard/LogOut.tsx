import { useEffect } from "react";
import { useRouter } from "expo-router";
import useUserState from "../../../../states/useUserState";

export default function LogOut() {
  const router = useRouter();
  const { logout } = useUserState();

  useEffect(() => {
    logout();
    router.dismissAll();
    router.replace("/");
  }, [router]);

  return null;
}
