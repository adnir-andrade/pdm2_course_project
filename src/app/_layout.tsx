import { Stack } from "expo-router";
import "../../global.css";
import useLoadFonts from "../hooks/useFonts";

export default function Layout() {
  const fontsLoaded = useLoadFonts();

  if (!fontsLoaded) return null;

  return (
    <Stack screenOptions={{ headerShown: false, headerTitle: "Home" }}>
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
