import { View } from "react-native";
import React from "react";
import Text from "../../../../../../../../common/components/Text";

type Props = {
  id?: number;
  name: string;
  quantity: number;
  weight: number;
};

export default function ListLine({ id, name, quantity, weight }: Props) {
  return (
    <View key={id} className="flex flex-row justify-between w-full px-4 py-2">
      <View className={`basis-[70%]`}>
        <Text>{name}</Text>
      </View>
      <View className={`basis-[15%] items-center`}>
        <Text>{quantity.toString()}</Text>
      </View>
      <View className={`basis-[15%] items-center`}>
        <Text>{weight.toString()}</Text>
      </View>
    </View>
  );
}
