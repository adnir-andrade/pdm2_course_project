import { TouchableOpacity, View } from "react-native";
import React from "react";
import { Icon } from "@rneui/base";
import useCharacterState from "../../../../../../../../states/useCharacterState";
import useUserState from "../../../../../../../../states/useUserState";
import { useEntries } from "../../../../../../../../hooks/Journal/useEntries";

type Props = { id: string; refreshCallback: () => void };

export default function UtilitiesButtons({ id, refreshCallback }: Props) {
  const { token } = useUserState();
  const { character } = useCharacterState();
  const { deleteEntry } = useEntries(character?.id!, token!);

  const handleEdit = () => {
    console.log(`Edit modal opens up for Entry ${id}`);
  };

  const handleDelete = () => {
    deleteEntry(id);
    refreshCallback();
    console.log(`Delete modal opens up for Entry ${id}`);
  };

  return (
    <View className={`flex flex-row justify-evenly card-pill`}>
      <TouchableOpacity onPress={() => handleEdit()}>
        <Icon name={`feather`} type={`feather`} color={`#f1e8e8`} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleDelete()}>
        <Icon name={`x-circle`} type={`feather`} color={`#881821`} />
      </TouchableOpacity>
    </View>
  );
}
