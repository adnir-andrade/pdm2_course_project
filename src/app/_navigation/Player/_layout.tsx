import { Stack } from "expo-router";

export default function PlayerLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Characters"
        options={{
          headerTitle: "Characters",
        }}
      />
    </Stack>
  );
}
