import { useEffect } from "react";
import { Stack, useRouter } from "expo-router";
import "../../global.css";
import useLoadFonts from "../hooks/useFonts";
import useUserState from "../states/useUserState";

export default function Layout() {
  const fontsLoaded = useLoadFonts();
  const { token } = useUserState();
  const router = useRouter();

  useEffect(() => {
    //TODO: When API is implemented, check if database token match
    if (fontsLoaded && token) {
      router.replace("(Restricted)/");
    } else if (fontsLoaded) {
      router.replace("/");
    }
  }, [fontsLoaded, token, router]);

  if (!fontsLoaded) return null;

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Auth/screens/LoginScreen"
        options={{
          headerShown: true,
          headerTitle: "Login",
        }}
      />
    </Stack>
  );
}
