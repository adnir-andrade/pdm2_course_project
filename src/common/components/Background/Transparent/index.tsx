import { View } from "react-native";
import React, { ReactNode } from "react";

type BackgroundProps = {
  children: ReactNode;
};

export default function Background({ children }: BackgroundProps) {
  return (
    <View className="w-5/6 h-5/6 bg-black/50 rounded-card">{children}</View>
  );
}
