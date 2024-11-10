import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import React from "react";
import Icon from "react-native-ico-dazzle-line";

type OptionsButtonProps = {
  onPress: () => void;
} & TouchableOpacityProps;

export default function OptionsButton({ onPress }: OptionsButtonProps) {
  return (
    <TouchableOpacity
      className="h-full w-16 absolute right-0 justify-center items-center opacity-35"
      onPress={onPress}
    >
      <Icon name="dots-vertical-alt" width="40" height="40" color="#CFBE86" />
    </TouchableOpacity>
  );
}
