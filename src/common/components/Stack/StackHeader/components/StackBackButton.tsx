import {
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewProps,
} from "react-native";
import Icon from "react-native-ico-sign-and-symbols";
import React from "react";

type Props = {} & ViewProps & TouchableOpacityProps;

export default function StackBackButton({ onPress, ...rest }: Props) {
  return (
    <View {...rest}>
      <TouchableOpacity onPress={onPress}>
        <Icon
          name={"reply-arrow-1"}
          width={25}
          height={25}
          color={"rgba(207, 190, 134, 0.75)"}
        />
      </TouchableOpacity>
    </View>
  );
}
