import { TouchableOpacity, View } from "react-native";
import React from "react";
import { Icon } from "@rneui/base";

type Props = { id: number };

export default function UtilitiesButtons({ id }: Props) {
  const handleEdit = (id: number) => {
    console.log(`Edit modal opens up for Entry ${id}`);
  };

  const handleDelete = (id: number) => {
    console.log(`Delete modal opens up for Entry ${id}`);
  };

  return (
    <View className={`flex flex-row justify-evenly card-pill`}>
      <TouchableOpacity onPress={() => handleEdit(id)}>
        <Icon name={`feather`} type={`feather`} color={`#f1e8e8`} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleDelete(id)}>
        <Icon name={`x-circle`} type={`feather`} color={`#881821`} />
      </TouchableOpacity>
    </View>
  );
}
