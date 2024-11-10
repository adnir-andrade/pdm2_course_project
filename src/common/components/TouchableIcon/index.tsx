import { ImageBackground, TouchableOpacity } from "react-native";
import React from "react";

const iconPaths = {
  google: require("../../../../assets/images/Google.png"),
};

type TouchableIconProps = {
  icon: keyof typeof iconPaths;
  onPress?: () => void;
};

export default function TouchableIcon({ icon, onPress }: TouchableIconProps) {
  const logoPath = iconPaths[icon];

  return (
    <TouchableOpacity
      className="w-full h-20 justify-center items-center"
      onPress={onPress}
    >
      <ImageBackground
        source={logoPath}
        className="w-full h-full"
        resizeMode={"contain"}
      />
    </TouchableOpacity>
  );
}
