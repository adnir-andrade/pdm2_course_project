import { Stack } from "expo-router";

export default function RestrictedLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{
          headerShown: true,
          headerTitle: "Home",
        }}
      />
      <Stack.Screen
        name="DM"
        options={{
          headerShown: true,
          headerTitle: "Campaigns",
        }}
      />
      <Stack.Screen
        name="Player"
        options={{
          headerShown: true,
          headerTitle: "Characters",
        }}
      />
    </Stack>
  );
}
