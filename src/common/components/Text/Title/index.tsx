import { Text as ReactText, TextProps as ReactTextProps } from "react-native";
import React from "react";

type TextProps = {
  children: string;
  extraClass?: string;
} & ReactTextProps;

export default function Text({ children, ...rest }: TextProps) {
  return (
    <ReactText
      className={`text-center text-themys-straw text-lg font-cinzel-bold text-shadow-lg`}
      {...rest}
    >
      {children}
    </ReactText>
  );
}
