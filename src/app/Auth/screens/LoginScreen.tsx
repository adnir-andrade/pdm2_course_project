import { View } from "react-native";
import React from "react";
import Background from "../../../common/components/Background";
import Watermark from "../../../common/components/Watermark";
import LoginForm from "../components/LoginForm";

export default function Login() {
  return (
    <Background>
      <Watermark />
      <View className="h-full justify-center items-center">
        <Background.Transparent>
          <LoginForm />
        </Background.Transparent>
      </View>
    </Background>
  );
}
