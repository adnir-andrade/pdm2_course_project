import { Text, View } from "react-native";
import React from "react";

export default function Login() {
  const signInHandler = () => {
    console.log("Sign in clicked!");
  };

  const logInHandler = () => {
    console.log("Log in clicked!");
  };

  return (
    <View className="flex flex-col">
      <Text>Test</Text>
    </View>
  );
}
