import { Tabs } from "expo-router";
import TabBarIcon from "../../common/components/Tabs/TabBarIcon";

export default function RestrictedLayout() {
  const routeNames: { [key: string]: string } = {
    index: "Home",
    DM: "DM",
    Player: "Player",
  };

  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#c29f41",
        tabBarInactiveTintColor: "#cfbe86",
        tabBarStyle: {
          backgroundColor: "#161414",
          borderColor: "#cfbe86",
          shadowColor: "#cfbe86",
          shadowOpacity: 0.4,
          height: 80,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarIcon: ({ focused }) => {
          const routeName = routeNames[route.name] || route.name;
          return <TabBarIcon routeName={routeName} focused={focused} />;
        },
      })}
    >
      <Tabs.Screen
        name="DM"
        options={{
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
          headerTitle: "Campaigns",
        }}
      />
    </Tabs>
  );
}
