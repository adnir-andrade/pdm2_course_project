import { View } from "react-native";
import React from "react";
import Background from "../../../../../../common/components/Background";
import Watermark from "../../../../../../common/components/Watermark";
import Text from "../../../../../../common/components/Text";
import InventoryContent from "../components/InventoryContent";
import useCharacterState from "../../../../../../states/useCharacterState";

export default function InventoryScreen() {
  const { character } = useCharacterState();

  return (
    <Background>
      <Watermark />
      <View className="flex-1 flex-col">
        <View className="basis-[15%] w-full px-1 pt-14 centralized">
          <Text.Title>{character?.name!}</Text.Title>
        </View>
        <View className="items-center h-full max-h-[90%]">
          <Background.Transparent>
            <InventoryContent className={`px-5 py-8`} />
          </Background.Transparent>
        </View>
      </View>
    </Background>
  );
}
