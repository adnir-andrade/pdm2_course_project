import { View } from "react-native";
import React from "react";
import Text from "../../../../../../../../common/components/Text";

type Props = { content: string };

export default function EntryText({ content }: Props) {
  return (
    <View className={`bg-themys-cod-gray/70 rounded-b-xl px-2 py-6`}>
      <Text className="text-simple text-xl text-justify">{content}</Text>
    </View>
  );
}
