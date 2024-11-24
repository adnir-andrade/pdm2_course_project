import { View } from "react-native";
import React, { ReactNode } from "react";
import Title from "./Title";

type Props = {
  children: ReactNode;
};

export default function Card({ children }: Props) {
  return (
    <View className="w-full h-full p-4 bg-themys rounded-card-8">
      {children}
    </View>
  );
}

Card.Title = Title;
