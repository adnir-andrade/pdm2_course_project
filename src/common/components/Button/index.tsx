import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import React from "react";
import Slim from "./Slim";
import Robust from "./Robust";
import Rectangular from "./Rectangular";

type ButtonProps = {
  title: string;
  onPress: () => void;
} & TouchableOpacityProps;

export default function Button({ title, onPress }: ButtonProps) {
  return (
    <TouchableOpacity className={`button`} onPress={onPress}>
      <Text className="text-decorated text-center text-4xl -bottom-1">
        {title}
      </Text>
    </TouchableOpacity>
  );
}

Button.Slim = Slim;
Button.Robust = Robust;
Button.Rectangular = Rectangular;
