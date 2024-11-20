import { Stack } from "expo-router";

export default function PlayerLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Characters",
        }}
      />
    </Stack>
  );
}
