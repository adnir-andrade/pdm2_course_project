import { View } from "react-native";
import Background from "../common/components/Background";
import Watermark from "../common/components/Watermark";
import LoginScreen from "../app/Login/screens/LoginScreen";
import React from "react";

export default function Home() {
  return (
    <Background>
      <Watermark />
      <View className="h-full justify-center items-center">
        <Background.Transparent>
          <LoginScreen />
        </Background.Transparent>
      </View>
    </Background>
  );
}
