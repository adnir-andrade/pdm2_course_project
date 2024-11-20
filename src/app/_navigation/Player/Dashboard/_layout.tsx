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
      </Drawer>
    </GestureHandlerRootView>
  );
}
