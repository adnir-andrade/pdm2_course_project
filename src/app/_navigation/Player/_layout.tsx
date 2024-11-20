import { Stack } from "expo-router";

export default function PlayerLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Campaigns",
        }}
      />
      <Stack.Screen
        name="Characters"
        options={{
          headerTitle: "Characters",
          headerShown: true,
        }}
      />
    </Stack>
  );
}
