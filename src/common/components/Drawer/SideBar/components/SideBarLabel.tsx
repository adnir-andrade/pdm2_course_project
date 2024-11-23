import React from "react";
import Text from "../../../Text";
import { View, ViewProps } from "react-native";

type SideBarLabelProps = {
  label: string;
} & ViewProps;

export default function SideBarLabel({ label, ...rest }: SideBarLabelProps) {
  return (
    <View {...rest}>
      <Text className={`text text-xl`}>{label}</Text>
    </View>
  );
}
