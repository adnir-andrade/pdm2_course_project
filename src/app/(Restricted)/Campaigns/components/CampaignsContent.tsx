import { View } from "react-native";
import React from "react";
import CampaignsList from "./CampaignsList";

export default function CampaignsContent() {
  return (
    <View className="flex-1 px-7 pt-10">
      <CampaignsList />
    </View>
  );
}
