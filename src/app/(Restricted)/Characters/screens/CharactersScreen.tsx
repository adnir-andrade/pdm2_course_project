import { View } from "react-native";
import React from "react";
import Background from "../../../../common/components/Background";
import Watermark from "../../../../common/components/Watermark";
import Footer from "../../../../common/components/Footer";
import CampaignsContent from "../components/CharactersContent";
import Text from "../../../../common/components/Text";

export default function Characters() {
  return (
    <Background>
      <Watermark />
      <View className="flex-1 flex-col">
        <View className="basis-[15%] w-full px-1 justify-center items-center">
          <Text.Title>Select a{"\n"}Character</Text.Title>
        </View>
        <View className="items-center h-full max-h-[90%]">
          <Background.Transparent>
            <CampaignsContent />
          </Background.Transparent>
        </View>
        <Footer />
      </View>
    </Background>
  );
}
