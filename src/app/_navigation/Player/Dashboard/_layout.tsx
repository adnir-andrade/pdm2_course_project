import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default function DashboardLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer screenOptions={{ headerShown: false }}>
        <Drawer.Screen
          name="index"
          options={{
            headerShown: true,
            headerTitle: "Dashboard",
            drawerLabel: "Character Sheet",
          }}
        />
        <Drawer.Screen
          name="Inventory"
          options={{
            headerShown: true,
            headerTitle: "Inventory",
            drawerLabel: "Inventory",
          }}
        />
        <Drawer.Screen
          name="Journal"
          options={{
            headerShown: true,
            headerTitle: "Journal",
            drawerLabel: "Journal",
          }}
        />
        <Drawer.Screen
          name="CharacterSelection"
          options={{
            drawerLabel: "Character Selection",
            headerShown: false,
            drawerLabelStyle: { fontWeight: "bold" },
          }}
        />
        <Drawer.Screen
          name="CampaignSelection"
          options={{
            drawerLabel: "Campaign Selection",
            headerShown: false,
            drawerLabelStyle: { fontWeight: "bold" },
          }}
        />
        <Drawer.Screen
          name="Home"
          options={{
            drawerLabel: "Home",
            headerShown: false,
            drawerLabelStyle: { fontWeight: "bold" },
          }}
        />
        <Drawer.Screen
          name="LogOut"
          options={{
            drawerLabel: "Log Out",
            headerShown: false,
            drawerLabelStyle: { fontWeight: "bold" },
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
