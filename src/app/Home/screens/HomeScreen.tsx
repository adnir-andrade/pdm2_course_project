import { Text, View } from "react-native";
import React from "react";
import Logo from "../../../common/components/Logo";
import Button from "../../../common/components/Button";
import GoogleLogo from "../components/GoogleLogo";

export default function Home() {
  const buttonFunction = () => {
    console.log("click");
  };

  return (
    <View className="flex flex-col">
      <View className="basis-1/6 justify-center items-center">
        <Logo />
      </View>
      <View className="basis-4/6 justify-center items-center gap-10 w-full">
        <Button title="Sign In" onPress={buttonFunction} />
        <Button title="Log In" onPress={buttonFunction} />
      </View>
      <View className="basis-1/6 justify-center items-center">
        <Text className="font-cinzel-bold text-themys-straw text-2xl">
          Or Log In with
        </Text>
        <GoogleLogo />
      </View>
    </View>
  );
}
