import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default function RestrictedLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer screenOptions={{ headerShown: false }}>
        <Drawer.Screen
          name="Roles/screens/RolesScreen"
          options={{
            headerTitle: "Roles",
            drawerLabel: "Roles",
          }}
        />
        <Drawer.Screen
          name="Campaigns"
          options={{
            headerShown: true,
            headerTitle: "Campaigns",
          }}
        />
        <Drawer.Screen
          name="Characters"
          options={{
            headerShown: true,
            headerTitle: "Characters",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
