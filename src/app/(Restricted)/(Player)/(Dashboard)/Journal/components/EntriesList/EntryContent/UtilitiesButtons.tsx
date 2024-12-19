import { TouchableOpacity, View } from "react-native";
import React from "react";
import { Icon } from "@rneui/base";
import useCharacterState from "../../../../../../../../states/useCharacterState";
import useUserState from "../../../../../../../../states/useUserState";
import { useEntries } from "../../../../../../../../hooks/Journal/useEntries";

type Props = {
  id: string;
  refreshCallback: () => void;
  editCallback: () => void;
};

export default function UtilitiesButtons({
  id,
  refreshCallback,
  editCallback,
}: Props) {
  const { token } = useUserState();
  const { character } = useCharacterState();
  const { deleteEntry } = useEntries(character?.id!, token!);

  const handleDelete = () => {
    deleteEntry(id);
    refreshCallback();
  };

  return (
    <View className={`flex flex-row justify-evenly card-pill`}>
      <TouchableOpacity onPress={() => editCallback()}>
        <Icon name={`feather`} type={`feather`} color={`#f1e8e8`} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleDelete()}>
        <Icon name={`x-circle`} type={`feather`} color={`#881821`} />
      </TouchableOpacity>
    </View>
  );
}
