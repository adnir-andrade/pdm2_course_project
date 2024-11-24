import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onPress: () => void;
} & TouchableOpacityProps;

export default function Button({ children, onPress }: ButtonProps) {
  return (
    <TouchableOpacity className={`button-rectangular pt-1`} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
}
