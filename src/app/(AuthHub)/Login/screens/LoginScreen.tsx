import { View } from "react-native";
import React from "react";
import Background from "../../../../common/components/Background";
import Watermark from "../../../../common/components/Watermark";
import LoginContent from "../components/LoginContent";

export default function Login() {
  return (
    <Background>
      <Watermark />
      <View className="h-full justify-center items-center">
        <Background.Transparent>
          <LoginContent />
        </Background.Transparent>
      </View>
    </Background>
  );
}
