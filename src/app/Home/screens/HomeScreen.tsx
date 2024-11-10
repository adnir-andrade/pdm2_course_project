import { View } from "react-native";
import React from "react";
import Logo from "../../../common/components/Logo";
import Button from "../../../common/components/Button";
import Footer from "../components/Footer";

export default function Home() {
  const signInHandler = () => {
    console.log("Sign in clicked!");
  };

  return (
    <View className="flex flex-col">
      <View className="basis-1/6 justify-center items-center">
        <Logo />
      </View>
      <View className="basis-4/6 justify-center items-center gap-10 w-full">
        <Button.Touchable title="Sign In" onPress={signInHandler} />
        <Button title="Log In" path="/Auth/screens/LoginScreen" />
      </View>
      <View className="basis-1/6 justify-center items-center gap-3">
        <Footer />
      </View>
    </View>
  );
}
