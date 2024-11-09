import { Text as ReactText, TextProps as ReactTextProps } from "react-native";
import Title from "./Title";
import Adorned from "./Adorned";
import React from "react";

type TextProps = {
  children: string;
  extraClass?: string;
} & ReactTextProps;

export default function Text({ children, ...rest }: TextProps) {
  return (
    <ReactText
      className={`text-themys-soft-peach font-cinzel-medium text-lg`}
      {...rest}
    >
      {children}
    </ReactText>
  );
}

Text.Title = Title;
Text.Adorned = Adorned;
