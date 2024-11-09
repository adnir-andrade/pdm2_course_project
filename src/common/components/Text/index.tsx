import { View, Text as ReactText } from 'react-native';
import Title from './Title';
import React from 'react';

type TextProps = {
  children: string;
  extraClass?: string;
};

export default function Text({ children, extraClass }: TextProps) {
  return (
    <ReactText
      className={`text-themys-soft-peach font-cinzel-medium text-lg ${extraClass}`}
    >
      {children}
    </ReactText>
  );
}

Text.Title = Title;
