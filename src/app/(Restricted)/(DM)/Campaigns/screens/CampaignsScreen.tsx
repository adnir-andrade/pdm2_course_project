import { View } from "react-native";
import React from "react";
import Background from "../../../../../common/components/Background";
import Watermark from "../../../../../common/components/Watermark";
import CampaignsContent from "../components/CampaignsContent";
import Text from "../../../../../common/components/Text";

export default function CampaignsScreen() {
  return (
    <Background>
      <Watermark />
      <View className="flex-1 flex-col">
        <View className="basis-[15%] w-full px-1 centralized">
          <Text.Title>Select a{"\n"}Campaign</Text.Title>
        </View>
        <View className="items-center h-full max-h-[90%]">
          <Background.Transparent>
            <CampaignsContent />
          </Background.Transparent>
        </View>
      </View>
    </Background>
  );
}
