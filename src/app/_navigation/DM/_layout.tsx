import { Stack } from "expo-router";

export default function DmLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Campaigns",
        }}
      />
    </Stack>
  );
}
