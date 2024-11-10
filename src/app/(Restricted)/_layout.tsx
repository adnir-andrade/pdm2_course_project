import { Stack } from "expo-router";

export default function RestrictedLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Roles/screens/RolesScreen"
        options={{
          headerShown: true,
          headerTitle: "Roles",
        }}
      />
      <Stack.Screen
        name="Campaigns/screens/CampaignsScreen"
        options={{
          headerShown: true,
          headerTitle: "Campaigns",
        }}
      />
      <Stack.Screen
        name="Characters/screens/CharactersScreen"
        options={{
          headerShown: true,
          headerTitle: "Characters",
        }}
      />
    </Stack>
  );
}
