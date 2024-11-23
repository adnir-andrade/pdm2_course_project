import { Stack } from "expo-router";
import StackHeader from "../../../common/components/Stack/StackHeader";

export default function PlayerLayout() {
  return (
    <Stack
      screenOptions={{
        header: (props) => <StackHeader {...props} />,
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Campaigns",
        }}
      />
      <Stack.Screen
        name="Characters"
        options={{
          headerTitle: "Characters",
          headerShown: true,
        }}
      />
    </Stack>
  );
}
