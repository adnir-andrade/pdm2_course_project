import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import React from "react";
import Slim from "./Slim";
import Robust from "./Robust";

type ButtonProps = {
  title: string;
  onPress: () => void;
} & TouchableOpacityProps;

export default function Button({ title, onPress }: ButtonProps) {
  const roundedBorders =
    "rounded-tl-[35] rounded-br-[35] rounded-bl-[15] rounded-tr-[15]";

  return (
    <TouchableOpacity
      className={`w-full h-[80] px-4 py-2 bg-themys-dune border border-themys-straw justify-center shadow-basic ${roundedBorders}`}
      onPress={onPress}
    >
      <Text className="text-center text-themys-straw text-4xl font-cinzel-decorative-bold -bottom-1 text-shadow-lg">
        {title}
      </Text>
    </TouchableOpacity>
  );
}

Button.Slim = Slim;
Button.Robust = Robust;
