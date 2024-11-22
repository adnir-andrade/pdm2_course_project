import { View } from "react-native";
import React from "react";
import Logo from "../../../../common/components/Logo";
import Footer from "./Footer";
import LoginForm from "./LoginForm";

export default function LoginContent() {
  return (
    <View className="flex flex-col shrink">
      <View className="basis-1/6 centralized">
        <Logo />
      </View>
      <View className="basis-4/6 centralized gap-10 w-full px-7 shrink">
        <LoginForm />
      </View>
      <View className="basis-1/6 centralized">
        <Footer />
      </View>
    </View>
  );
}
