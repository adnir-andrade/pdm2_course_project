import { View } from "react-native";
import React from "react";
import Background from "../../../../common/components/Background";
import Watermark from "../../../../common/components/Watermark";
import HomeContent from "../components/HomeContent";

export default function HomeScreen() {
  return (
    <Background>
      <Watermark />
      <View className="flex-1 flex-col pt-14">
        <View className="basis-[15%] w-full px-1 centralized"></View>
        <View className="items-center h-full max-h-[95%]">
          <Background.Transparent>
            <HomeContent />
          </Background.Transparent>
        </View>
      </View>
    </Background>
  );
}
