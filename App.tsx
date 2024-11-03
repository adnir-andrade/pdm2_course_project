import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import "./global.css";
import Icon from "react-native-ico-rpg-game";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-2xl">Open up App.tsx to start working on your app!</Text>
        <Icon name="wyvern" height="120" width="120"></Icon>
      <StatusBar style="auto" />
    </View>
  );
}