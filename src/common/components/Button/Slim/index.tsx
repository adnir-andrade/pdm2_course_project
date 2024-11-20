import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import React from "react";

type ButtonProps = {
  title: string;
  onPress: () => void;
} & TouchableOpacityProps;

export default function Button({ title, onPress }: ButtonProps) {
  return (
    <TouchableOpacity className={`button-slim`} onPress={onPress}>
      <Text className="text-center text-themys-straw text-[22px] font-cinzel-decorative-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
}
