import { View } from "react-native";
import React from "react";
import Background from "../../../../../common/components/Background";
import Watermark from "../../../../../common/components/Watermark";
import CharactersContent from "../components/CharactersContent";
import Text from "../../../../../common/components/Text";

export default function CharactersScreen() {
  return (
    <Background>
      <Watermark />
      <View className="flex-1 flex-col">
        <View className="basis-[15%] w-full px-1 centralized">
          <Text.Title>Campaign name goes here</Text.Title>
        </View>
        <View className="items-center h-full max-h-[95%]">
          <Background.Transparent>
            <CharactersContent />
          </Background.Transparent>
        </View>
      </View>
    </Background>
  );
}
