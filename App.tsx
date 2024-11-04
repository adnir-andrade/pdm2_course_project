import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import "./global.css";
import Icon from "react-native-ico-rpg-game";
import {Button} from "@rneui/themed";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-2xl">Open up App.tsx to start working on your app!</Text>
        <Icon name="wyvern" height="120" width="120"></Icon>
        <Button title={'React Native Elements Button'}
                buttonStyle={{backgroundColor: 'rgba(39, 39, 39, 1)'}}
                containerStyle={{width: 200,
                marginHorizontal: 50,
                marginVertical: 10}} />
      <StatusBar style="auto" />
    </View>
  );
}