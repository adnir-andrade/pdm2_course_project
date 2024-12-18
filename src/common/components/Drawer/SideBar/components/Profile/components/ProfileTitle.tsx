import React from "react";
import { View, ViewProps } from "react-native";
import Text from "../../../../../Text";

type ProfileTitleProps = {
  characterName: string;
} & ViewProps;

export default function ProfileTitle({
  characterName,
  ...rest
}: ProfileTitleProps) {
  return (
    <View {...rest}>
      <Text className={`text-decorated-gold text-center text-xl text-ellipsis`}>
        {characterName}
      </Text>
    </View>
  );
}
