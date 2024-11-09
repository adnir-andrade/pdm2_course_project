import { ImageBackground, TouchableOpacity } from "react-native";
import React from "react";

export default function GoogleLogo() {
  const logoPath = require("../../../../assets/images/Google.png");

  return (
    <TouchableOpacity
      className="w-full h-20 justify-center items-center"
      onPress={() => console.log("Google Clicked!")}
    >
      <ImageBackground
        source={logoPath}
        className="w-full h-full"
        resizeMode={"contain"}
      />
    </TouchableOpacity>
  );
}
