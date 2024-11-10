import {
  Text as ReactText,
  TextProps as ReactTextProps,
  View,
} from "react-native";
import React from "react";
import Line from "../../Line";

type TextProps = {
  children: string;
  extraClass?: string;
} & ReactTextProps;

export default function Text({ children, ...rest }: TextProps) {
  return (
    <View className="flex-row items-center justify-center mx-6">
      <Line />
      <ReactText
        className={`mx-4 font-cinzel-bold text-themys-straw text-4xl text-center text-shadow-lg`}
        {...rest}
      >
        {children}
      </ReactText>
      <Line inverted={true} />
    </View>
  );
}
