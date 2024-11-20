import { Tabs } from "expo-router";

export default function RestrictedLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="DM"
        options={{
          headerShown: true,
          headerTitle: "Campaigns",
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerTitle: "Home",
        }}
      />
      <Tabs.Screen
        name="Player"
        options={{
          headerShown: true,
          headerTitle: "Campaigns",
        }}
      />
    </Tabs>
  );
}
