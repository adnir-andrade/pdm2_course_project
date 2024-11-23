import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import Text from "../../../Text";

type Props = {} & TouchableOpacityProps;

export default function DrawerButton({ ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <Text className={`text-5xl text-themys-tussock`}>☰</Text>
    </TouchableOpacity>
  );
}
