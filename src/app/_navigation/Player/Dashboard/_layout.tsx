import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import SideBar from "../../../../common/components/Drawer/SideBar";
import NavBar from "../../../../common/components/Drawer/NavBar";

export default function DashboardLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={(props) => <SideBar {...props} />}
        screenOptions={{
          headerShown: false,
          header: (props) => <NavBar {...props} />,
          drawerStyle: {
            backgroundColor: "#transparent",
          },
        }}
      >
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
