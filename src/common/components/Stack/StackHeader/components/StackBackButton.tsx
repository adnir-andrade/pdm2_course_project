import {
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewProps,
} from "react-native";
import React from "react";
import { Icon } from "@rneui/base";

type Props = {} & ViewProps & TouchableOpacityProps;

export default function StackBackButton({ onPress, ...rest }: Props) {
  return (
    <View {...rest}>
      <TouchableOpacity onPress={onPress}>
        <Icon name={"arrow-left"} type={"font-awesome-5"} color={"#cfbe86"} />
      </TouchableOpacity>
    </View>
  );
}
