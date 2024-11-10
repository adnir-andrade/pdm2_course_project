import { useEffect } from "react";
import { Stack, useRouter } from "expo-router";
import "../../global.css";
import useLoadFonts from "../hooks/useFonts";
import useUserState from "../states/useUserState";

export default function Layout() {
  const fontsLoaded = useLoadFonts();
  const { username, token } = useUserState();
  const router = useRouter();

  useEffect(() => {
    //TODO: When API is implemented, check if database token match
    if (fontsLoaded && token) {
      router.replace("(Restricted)/Roles/screens/RolesScreen");
    } else if (fontsLoaded) {
      router.replace("/");
    }
  }, [fontsLoaded, username, router]);

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
      <Stack.Screen
        name="(Restricted)/Roles/screens/RolesScreen"
        options={{
          headerShown: true,
          headerTitle: "Roles",
        }}
      />
      <Stack.Screen
        name="(Restricted)/Campaigns/screens/CampaignsScreen"
        options={{
          headerShown: true,
          headerTitle: "Campaigns",
        }}
      />
      <Stack.Screen
        name="(Restricted)/Characters/screens/CharactersScreen"
        options={{
          headerShown: true,
          headerTitle: "Characters",
        }}
      />
    </Stack>
  );
}
