import { View } from "react-native";
import React from "react";
import Logo from "../../../../common/components/Logo";
import Button from "../../../../common/components/Button";
import Footer from "./Footer";
import { useRouter } from "expo-router";

export default function HomeContent() {
  const router = useRouter();

  const signInHandler = () => {
    console.log("Sign in clicked!");
  };

  const logInHandler = () => {
    router.push("(AuthHub)/Login/screens/LoginScreen");
  };

  return (
    <View className="flex flex-col">
      <View className="basis-1/6 centralized">
        <Logo />
      </View>
      <View className="w-5/6 basis-4/6 centralized self-center gap-10">
        <Button title="Sign In" onPress={signInHandler} />
        <Button title="Log In" onPress={logInHandler} />
      </View>
      <View className="basis-1/6 centralized gap-3">
        <Footer />
      </View>
    </View>
  );
}
