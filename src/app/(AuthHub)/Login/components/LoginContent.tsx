import { View } from "react-native";
import React from "react";
import Logo from "../../../../common/components/Logo";
import Footer from "./Footer";
import LoginForm from "./LoginForm";

export default function LoginContent() {
  return (
    <View className="flex flex-col shrink">
      <View className="basis-1/6 justify-center items-center">
        <Logo />
      </View>
      <View className="basis-4/6 justify-center items-center gap-10 w-full px-7 shrink">
        <LoginForm />
      </View>
      <View className="basis-1/6 justify-center items-center">
        <Footer />
      </View>
    </View>
  );
}
