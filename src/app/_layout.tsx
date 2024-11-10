import { Stack } from "expo-router";
import "../../global.css";
import useLoadFonts from "../hooks/useFonts";

export default function Layout() {
  const fontsLoaded = useLoadFonts();

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
