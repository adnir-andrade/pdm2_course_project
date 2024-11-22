import { View } from "react-native";
import React from "react";
import Background from "../../../../common/components/Background";
import Watermark from "../../../../common/components/Watermark";
import HomeContent from "../components/HomeContent";

export default function HomeScreen() {
  return (
    <Background>
      <Watermark />
      <View className="h-full centralized">
        <Background.Transparent>
          <HomeContent />
        </Background.Transparent>
      </View>
    </Background>
  );
}
