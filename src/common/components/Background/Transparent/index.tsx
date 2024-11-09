import { View } from "react-native";
import React, { ReactNode } from "react";

type BackgroundProps = {
  children: ReactNode;
};

export default function Background({ children }: BackgroundProps) {
  return (
    <View className="w-5/6 h-5/6 bg-black/50 self-center justify-center rounded-t-[20] rounded-b-[10]">
      {children}
    </View>
  );
}
