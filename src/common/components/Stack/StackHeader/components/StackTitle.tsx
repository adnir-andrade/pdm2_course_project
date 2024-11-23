import React from "react";
import { View, ViewProps } from "react-native";
import Text from "../../../Text";

type Props = {
  title: string;
} & ViewProps;

export default function StackTitle({ title, ...rest }: Props) {
  return (
    <View {...rest}>
      <Text className={`text text-2xl`}>{title}</Text>
    </View>
  );
}
