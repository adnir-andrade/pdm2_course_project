import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import React from 'react';
import Text from '../Text';

type ImageProps = {
  title: string;
  onPress: () => void;
} & TouchableOpacityProps;

export default function ImageButton({ title, onPress }: ImageProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}
