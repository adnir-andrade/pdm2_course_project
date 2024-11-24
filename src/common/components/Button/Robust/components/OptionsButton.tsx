import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import React from "react";
import { Icon } from "@rneui/base";

type OptionsButtonProps = {
  onPress: () => void;
} & TouchableOpacityProps;

export default function OptionsButton({ onPress }: OptionsButtonProps) {
  return (
    <TouchableOpacity
      className="h-full w-16 absolute right-0 centralized opacity-35"
      onPress={onPress}
    >
      <Icon name="more-vertical" type={"feather"} color={"#CFBE86"} />
    </TouchableOpacity>
  );
}
