import { View } from "react-native";
import React from "react";
import Text from "../../../../../../../../common/components/Text";
import { Item, itemSchema } from "../../../../../../../../schemas/Item";

type Props = {
  item: Item;
};

export default function ListLine({ item }: Props) {
  const result = itemSchema.safeParse(item);

  if (!result.success) {
    console.error("Invalid item data:", result.error);
    return (
      <View className="flex flex-row justify-between w-full px-4 py-2">
        <Text className="text-red-500">Invalid item data</Text>
      </View>
    );
  }

  const validItem = result.data;

  return (
    <View
      key={validItem.id}
      className="flex flex-row justify-between w-full px-4 py-2"
    >
      <View className={`basis-[70%]`}>
        <Text>{validItem.name}</Text>
      </View>
      <View className={`basis-[15%] items-center`}>
        <Text>{validItem.quantity.toString()}</Text>
      </View>
      <View className={`basis-[15%] items-center`}>
        <Text>{validItem.weight.toString()}</Text>
      </View>
    </View>
  );
}
