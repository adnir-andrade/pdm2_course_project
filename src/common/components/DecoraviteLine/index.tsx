import { Image } from "react-native";
import React from "react";

export default function DecorativeLine() {
  return (
    <Image
      source={require("../../../../assets/images/Decoration.png")}
      className="absolute top-0 w-[66%] h-full"
      resizeMode="contain"
    />
  );
}
