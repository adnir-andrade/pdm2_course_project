import React from "react";
import Text from "../Text";
import { View } from "react-native";

export default function Footer() {
  const baseStyle =
    "text-center text-shadow-lg text-themys-tussock tracking-widest";

  return (
    <View className="flex-row w-full h-[5%] absolute bottom-0 bg-themys-cod-gray justify-center items-center opacity-85">
      <Text className={`${baseStyle} font-cinzel-regular`}>Developed by [</Text>
      <Text className={`${baseStyle} font-cinzel-bold`}>Adnir Andrade</Text>
      <Text className={`${baseStyle} font-cinzel-regular`}>] @ 2024</Text>
    </View>
  );
}
