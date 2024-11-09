import { TouchableOpacity } from "react-native";
import React from "react";
import Text from "../../common/components/Text";

type PressableItemProps = {
  text: string;
  onPress: () => void;
};

export default function PressableItem({ text, onPress }: PressableItemProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text extraClass="my-1">{text}</Text>
    </TouchableOpacity>
  );
}
