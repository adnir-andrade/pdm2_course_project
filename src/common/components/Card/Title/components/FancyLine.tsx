import { View } from "react-native";
import React from "react";

export default function FancyLine() {
  return (
    <View
      className={`absolute w-full h-1 justify-center align-middle ml-4 mt-9 -z-10`}
    >
      <View className={`line scale-x-100`} />
      <View className={`absolute line-diamond -left-2`} />
      <View className={`absolute line-diamond -right-2`} />
    </View>
  );
}
