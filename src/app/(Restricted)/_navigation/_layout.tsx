import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default function RestrictedLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer screenOptions={{ headerShown: false }}>
        <Drawer.Screen
          name="Roles/index"
          options={{
            headerShown: true,
            headerTitle: "Roles",
            drawerLabel: "Roles",
          }}
        />
        <Drawer.Screen
          name="Campaigns/index"
          options={{
            headerShown: true,
            headerTitle: "Campaigns",
            drawerLabel: "Campaigns",
          }}
        />
        <Drawer.Screen
          name="Characters/index"
          options={{
            headerShown: true,
            headerTitle: "Characters",
            drawerLabel: "Characters",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
