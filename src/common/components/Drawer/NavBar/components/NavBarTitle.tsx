import React from "react";
import { View, ViewProps } from "react-native";
import Text from "../../../Text";

type Props = {
  title: string;
} & ViewProps;

export default function NavBarTitle({ title, ...rest }: Props) {
  return (
    <View {...rest}>
      <Text className={`text-decorated text-3xl`}> {title}</Text>
    </View>
  );
}
