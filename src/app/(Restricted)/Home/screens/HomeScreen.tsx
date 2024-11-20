import { View } from "react-native";
import React from "react";
import Background from "../../../../common/components/Background";
import Watermark from "../../../../common/components/Watermark";
import HomeContent from "../components/HomeContent";
import Footer from "../../../../common/components/Footer";

export default function HomeScreen() {
  return (
    <Background>
      <Watermark />
      <View className="h-full justify-center items-center">
        <Background.Transparent>
          <HomeContent />
        </Background.Transparent>
      </View>
      <Footer />
    </Background>
  );
}