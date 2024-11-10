import { View } from "react-native";
import React from "react";
import Background from "../../../../common/components/Background";
import Watermark from "../../../../common/components/Watermark";
import Footer from "../../../../common/components/Footer";
import CampaignsContent from "../components/CampaignsContent";
import Text from "../../../../common/components/Text";

export default function Campaigns() {
  return (
    <Background>
      <Watermark />
      <View className="h-full justify-center items-center">
        <Text.Title>Select a Campaign</Text.Title>
        <Background.Transparent>
          <CampaignsContent />
        </Background.Transparent>
      </View>
      <Footer />
    </Background>
  );
}
