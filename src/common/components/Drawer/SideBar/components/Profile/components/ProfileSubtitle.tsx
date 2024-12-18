import React from "react";
import { View, ViewProps } from "react-native";
import Text from "../../../../../Text";

type ProfileSubtitleProps = {
  klassName: string;
} & ViewProps;

export default function ProfileSubtitle({
  klassName,
  ...rest
}: ProfileSubtitleProps) {
  return (
    <View {...rest}>
      <Text className={`text-decorated-slim text-center text-xl`}>
        The {klassName}
      </Text>
    </View>
  );
}
