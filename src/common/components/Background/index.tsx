import { ImageBackground } from "react-native";
import React, { ReactNode } from "react";
import Transparent from "./Transparent";

type BackgroundProps = {
  children: ReactNode;
};

export default function Background({ children }: BackgroundProps) {
  // TODO: Leaving like this to implement dark mode in the future
  const imagePath = require("../../../../assets/images/Background.png");

  return (
    <ImageBackground source={imagePath} className="w-full h-full">
      {children}
    </ImageBackground>
  );
}

Background.Transparent = Transparent;
