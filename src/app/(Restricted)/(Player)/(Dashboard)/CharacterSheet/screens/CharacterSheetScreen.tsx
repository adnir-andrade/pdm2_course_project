import { View } from "react-native";
import React from "react";
import Background from "../../../../../../common/components/Background";
import Watermark from "../../../../../../common/components/Watermark";
import Text from "../../../../../../common/components/Text";

export default function CharacterSheetScreen() {
  return (
    <Background>
      <Watermark />
      <View className="flex-1 flex-col">
        <View className="basis-[15%] w-full px-1 centralized">
          <Text.Title>Character Name goes here</Text.Title>
        </View>
        <View className="items-center h-full max-h-[95%]">
          <Background.Transparent>
            <Text>Dashboard Screen</Text>
          </Background.Transparent>
        </View>
      </View>
    </Background>
  );
}
