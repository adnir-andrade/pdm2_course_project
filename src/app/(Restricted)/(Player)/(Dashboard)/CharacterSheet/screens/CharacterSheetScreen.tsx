import { View } from "react-native";
import React from "react";
import Background from "../../../../../../common/components/Background";
import Watermark from "../../../../../../common/components/Watermark";
import Text from "../../../../../../common/components/Text";
import CharacterSheetContent from "../components/CharacterSheetContent";

const character = {
  id: 1,
  player_id: 1,
  name: "Haotran",
  level: 10,
  gender: "male",
  race_id: 3,
  klass_id: 7,
};

export default function CharacterSheetScreen() {
  return (
    <Background>
      <Watermark />
      <View className="flex-1 flex-col">
        <View className="basis-[15%] w-full px-1 centralized">
          <Text.Title>{character.name}</Text.Title>
        </View>
        <View className="items-center h-full max-h-[95%]">
          <Background.Transparent>
            <CharacterSheetContent character={character} />
          </Background.Transparent>
        </View>
      </View>
    </Background>
  );
}
