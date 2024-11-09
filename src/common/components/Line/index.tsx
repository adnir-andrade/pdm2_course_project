import { Image } from "react-native";
import Slim from "./Slim";
import React from "react";

export default function Line() {
  return (
    <Image
      source={require("../../../../assets/images/Decoration.png")}
      className="absolute top-0 w-[66%] h-full"
      resizeMode="contain"
    />
  );
}

Line.Slim = Slim;
