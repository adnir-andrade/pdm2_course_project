import React from "react";
import { View, ViewProps } from "react-native";
import Text from "../../../../../Text";

type ProfileTitleProps = {} & ViewProps;

export default function ProfileTitle({ ...rest }: ProfileTitleProps) {
  //TODO: Use global state to get Character name or something
  return (
    <View {...rest}>
      <Text className={`text-decorated-gold text-center text-xl text-ellipsis`}>
        Character Name
      </Text>
    </View>
  );
}
