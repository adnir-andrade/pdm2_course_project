import { View } from "react-native";
import React from "react";
import Background from "../../../../common/components/Background";
import Watermark from "../../../../common/components/Watermark";
import RolesContent from "../components/RolesContent";
import Footer from "../../../../common/components/Footer";

export default function Roles() {
  return (
    <Background>
      <Watermark />
      <View className="h-full justify-center items-center">
        <Background.Transparent>
          <RolesContent />
        </Background.Transparent>
      </View>
      <Footer />
    </Background>
  );
}
