import {
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  View,
} from "react-native";
import React from "react";
import ListHeader from "./components/ListHeader";
import ListLine from "./components/ListLine";
import { Item } from "../../../../../../../schemas/Item";
import useUserState from "../../../../../../../states/useUserState";
import useCharacterState from "../../../../../../../states/useCharacterState";
import { useItems } from "../../../../../../../hooks/useItems";

export default function InventoryList() {
  const { token } = useUserState();
  const { character } = useCharacterState();
  const { items, loading } = useItems(character?.id!, token!);

  if (loading) {
    return (
      <View className={`flex-1 centralized bg-black`}>
        <ActivityIndicator size={`large`} />
      </View>
    );
  }

  const renderItem: ListRenderItem<Item> = ({ item }) => (
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
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={renderSeparator}
        className="w-full"
      />
    </>
  );
}
