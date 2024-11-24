import { View, ViewProps } from "react-native";
import React from "react";
import Card from "../../../../../../common/components/Card";
import InventoryList from "./InventoryList";

type Props = {} & ViewProps;

export default function InventoryContent({ ...rest }: Props) {
  return (
    <View {...rest}>
      <Card>
        <View className="flex flex-col items-center h-full">
          <View className="basis-[12.5%] w-full px-4">
            <Card.Title title="Inventory" />
          </View>
          <InventoryList />
        </View>
      </Card>
    </View>
  );
}
