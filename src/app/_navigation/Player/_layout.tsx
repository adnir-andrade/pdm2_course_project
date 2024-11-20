import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default function PlayerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer screenOptions={{ headerShown: false }}>
        <Drawer.Screen
          name="index"
          options={{
            headerTitle: "Characters",
            drawerLabel: "Characters",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
