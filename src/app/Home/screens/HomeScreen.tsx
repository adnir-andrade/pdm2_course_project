import React from "react";
import HomeContent from "../components/HomeContent";
import Watermark from "../../../common/components/Watermark";
import Background from "../../../common/components/Background";
import { View } from "react-native";

export default function Home() {
  return (
    <Background>
      <Watermark />
      <View className="h-full justify-center items-center">
        <Background.Transparent>
          <HomeContent />
        </Background.Transparent>
      </View>
    </Background>
  );
}
