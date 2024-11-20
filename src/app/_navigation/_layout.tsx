import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default function _layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer screenOptions={{ headerShown: false }}>
        <Drawer.Screen
          name="index"
          options={{
            headerShown: true,
            headerTitle: "Home",
            drawerLabel: "Home",
          }}
        />
        <Drawer.Screen
          name="DM"
          options={{
            headerShown: true,
            headerTitle: "Campaigns",
            drawerLabel: "Campaigns",
          }}
        />
        <Drawer.Screen
          name="Player"
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
