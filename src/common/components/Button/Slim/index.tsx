import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import React from "react";

type ButtonProps = {
  title: string;
  onPress: () => void;
} & TouchableOpacityProps;

export default function Button({ title, onPress }: ButtonProps) {
  const roundedBorders =
    "rounded-tl-2xl rounded-br-2xl rounded-bl-[7px] rounded-tr-[7px]";

  return (
    <TouchableOpacity
      className={`w-full h-[46] px-4 py-2 bg-themys-dune border border-themys-straw border-[0.5px] justify-center shadow ${roundedBorders}`}
      onPress={onPress}
    >
      <Text className="text-center text-themys-straw text-[22px] font-cinzel-decorative-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
}
