import React from 'react';
import Text from '../Text';
import { View } from 'react-native';
import {Card} from "@rneui/base";

type HeaderLabelProps = {
  title: string;
  spacing: string;
};

export default function HeaderLabel({ title, spacing }: HeaderLabelProps) {
  return (
    <View className={`${spacing}`}>
      <Card>
        <Text.Title>{title}</Text.Title>
      </Card>
    </View>
  );
}
