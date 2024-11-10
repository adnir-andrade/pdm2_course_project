import {
  Text as ReactText,
  TextProps as ReactTextProps,
  View,
} from "react-native";
import React from "react";
import Line from "../../Line";

type TextProps = {
  children: string | string[];
} & ReactTextProps;

export default function Text({ children, ...rest }: TextProps) {
  return (
    <View className="flex-row items-center justify-center mx-6">
      <Line />
      <View className="basis-[60%]">
        <ReactText
          className={`mx-4 font-cinzel-bold text-themys-straw text-4xl text-center text-shadow-lg`}
          adjustsFontSizeToFit={true}
          numberOfLines={2}
          {...rest}
        >
          {children}
        </ReactText>
      </View>
      <Line inverted={true} />
    </View>
  );
}
