import { ImageBackground } from "react-native";
import React from "react";

export default function Logo() {
  const logoPath = require("../../../../assets/images/Logo.png");

  return (
    <ImageBackground
      source={logoPath}
      className="w-full min-h-10 max-h-24 h-full"
      resizeMode={"contain"}
    />
  );
}
