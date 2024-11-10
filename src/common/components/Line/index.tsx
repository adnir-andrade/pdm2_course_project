import { View } from "react-native";
import Slim from "./Slim";
import React from "react";

type LineProp = {
  inverted?: boolean;
};

export default function Line({ inverted = false }: LineProp) {
  const line = "flex-1 h-1 bg-themys-straw shadow-basic";
  const diamond = "h-3 w-3 bg-themys-straw rotate-45 shadow-glow";

  return (
    <>
      {inverted ? (
        <>
          <View className={line} />
          <View className={diamond} />
        </>
      ) : (
        <>
          <View className={diamond} />
          <View className={line} />
        </>
      )}
    </>
  );
}

Line.Slim = Slim;
