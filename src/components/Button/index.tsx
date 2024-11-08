import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import React from "react";

type ImageProps = {
  title: string;
  onPress: () => void;
} & TouchableOpacityProps;

export default function Button({ title, onPress }: ImageProps) {
  const roundedBorders =
    "rounded-tl-[35] rounded-br-[35] rounded-bl-[15] rounded-tr-[15]";

  return (
    <TouchableOpacity
      className={`w-248 h-[80] px-4 py-2 bg-themys-dune border border-themys-straw justify-center ${roundedBorders}`}
      onPress={onPress}
    >
      <Text className="text-center text-themys-straw text-4xl font-cinzel-decorative-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
}
