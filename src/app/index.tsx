import { View } from "react-native";
import Background from "../common/components/Background";
import Watermark from "../common/components/Watermark";
import HomeScreen from "./Home/screens/HomeScreen";
import React from "react";

export default function Home() {
  return (
    <Background>
      <Watermark />
      <View className="h-full justify-center items-center">
        <Background.Transparent>
          <HomeScreen />
        </Background.Transparent>
      </View>
    </Background>
  );
}
