import { Stack } from "expo-router";

export default function RestrictedStack() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Roles"
        options={{
          headerShown: true,
          headerTitle: "Roles",
        }}
      />
      <Stack.Screen
        name="Campaigns"
        options={{
          headerShown: true,
          headerTitle: "Campaigns",
        }}
      />
      <Stack.Screen
        name="Characters"
        options={{
          headerShown: true,
          headerTitle: "Characters",
        }}
      />
    </Stack>
  );
}
