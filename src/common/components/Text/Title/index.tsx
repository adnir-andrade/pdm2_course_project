import { Text as ReactText } from 'react-native';
import React from 'react';

type TextProps = {
  children: string;
};

export default function Text({ children }: TextProps) {
  return (
    <>
      <ReactText className='text-center text-themys-straw text-lg font-cinzel-bold text-shadow-lg'>
        {children}
      </ReactText>
    </>
  );
}
