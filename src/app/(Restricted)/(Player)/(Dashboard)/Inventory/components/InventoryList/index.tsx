import { FlatList, ListRenderItem, View } from "react-native";
import React from "react";
import { inventoryItems } from "../../../../../../../mocks/MOCK_ITEMS";
import ListHeader from "./components/ListHeader";
import ListLine from "./components/ListLine";

type Items = {
  id: number;
  name: string;
  quantity: number;
  weight: number;
};

export default function InventoryList() {
  const renderItem: ListRenderItem<Items> = ({ item }) => (
    <ListLine
      id={item.id}
      name={item.name}
      quantity={item.quantity}
      weight={item.weight}
    />
  );

  const renderSeparator = () => <View className="line-faded" />;

  return (
    <>
      <ListHeader />
      <FlatList
        data={inventoryItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={renderSeparator}
        className="w-full"
      />
    </>
  );
}
