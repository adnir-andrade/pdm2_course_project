import React from "react";
import { View, ViewProps } from "react-native";
import Text from "../../../../../Text";

type ProfileSubtitleProps = {} & ViewProps;

export default function ProfileSubtitle({ ...rest }: ProfileSubtitleProps) {
  //TODO: Use global state to get Character class
  return (
    <View {...rest}>
      <Text className={`text-decorated-slim text-center text-xl`}>
        The Character Class
      </Text>
    </View>
  );
}
