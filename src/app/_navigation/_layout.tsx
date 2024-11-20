import { Tabs } from "expo-router";
import { Text, View } from "react-native";

export default function RestrictedLayout() {
  const routeNames: { [key: string]: string } = {
    index: "Home",
    DM: "Campaigns",
    Player: "Campaigns",
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
          height: 60,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarIcon: ({ focused }) => {
          const routeName = routeNames[route.name] || route.name;

          const shadowStyle = focused ? "shadow-lg" : "";
          return (
            <View
              className={`${shadowStyle} h-full w-full justify-center items-center`}
            >
              {/*TODO: Add icon depending on tab name. Gotta create a object for that probably*/}
              {/*<Icon name={} />*/}
              <Text
                className={`text ${focused ? "text-[#c29f41] text-xl" : "text-[#cfbe86]"}`}
              >
                {routeName}
              </Text>
            </View>
          );
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
