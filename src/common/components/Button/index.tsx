import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import React from "react";
import Slim from "./Slim";
import Robust from "./Robust";

type ButtonProps = {
  title: string;
  onPress: () => void;
} & TouchableOpacityProps;

export default function Button({ title, onPress }: ButtonProps) {
  return (
    <TouchableOpacity className={`button`} onPress={onPress}>
      <Text className="text-center text-themys-straw text-4xl font-cinzel-decorative-bold -bottom-1 text-shadow-lg">
        {title}
      </Text>
    </TouchableOpacity>
  );
}

Button.Slim = Slim;
Button.Robust = Robust;
