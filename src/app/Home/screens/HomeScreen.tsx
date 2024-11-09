import { Text, View } from "react-native";
import React from "react";
import Logo from "../../../common/components/Logo";
import Button from "../../../common/components/Button";
import GoogleLogo from "../components/GoogleLogo";
import { Link } from "expo-router";

export default function Home() {
  const signInHandler = () => {
    console.log("Sign in clicked!");
  };

  const logInHandler = () => {
    console.log("Log in clicked!");
  };

  return (
    <View className="flex flex-col">
      <View className="basis-1/6 justify-center items-center">
        <Logo />
      </View>
      <View className="basis-4/6 justify-center items-center gap-10 w-full">
        <Button.Touchable title="Sign In" onPress={signInHandler} />
        <Link href={{ pathname: "/Login/screens/LoginScreen" }}>
          <Button title="Log In" />
        </Link>
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
