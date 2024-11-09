import { Text, View } from "react-native";
import React from "react";
import Touchable from "../Button/Touchable";
import Slim from "../Button/Slim";
import { Link } from "expo-router";

type ButtonProps = {
  title: string;
  path: string;
};

export default function Button({ title, path }: ButtonProps) {
  const roundedBorders =
    "rounded-tl-[35] rounded-br-[35] rounded-bl-[15] rounded-tr-[15]";

  return (
    <Link href={{ pathname: path }}>
      <View
        className={`w-248 h-[80] px-4 py-2 bg-themys-dune border border-themys-straw justify-center shadow-basic ${roundedBorders}`}
      >
        <Text className="text-center text-themys-straw text-4xl font-cinzel-decorative-bold -bottom-1 text-shadow-sm">
          {title}
        </Text>
      </View>
    </Link>
  );
}

Button.Touchable = Touchable;
Button.Slim = Slim;
