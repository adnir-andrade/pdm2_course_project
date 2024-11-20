import { ImageBackground } from "react-native";
import React from "react";

export default function Watermark() {
  const logoPath = require("../../../../assets/images/Watermark.png");

  return (
    <ImageBackground
      source={logoPath}
      className="w-full h-full absolute opacity-40 -top-8"
      resizeMode={"cover"}
    />
  );
}
