import { FlatList } from "react-native";
import React from "react";
import { campaigns } from "../../../../mocks/MOCK_CAMPAIGN";
import AddCampaign from "./AddCampaign";
import { CampaignItem } from "./CampaignItem";

export default function CampaignsList() {
  return (
    <FlatList
      data={campaigns}
      renderItem={({ item }) => <CampaignItem item={item} />}
      keyExtractor={(item) => item.id.toString()}
      className="flex-1"
      showsVerticalScrollIndicator={false}
      ListFooterComponent={() => <AddCampaign />}
    />
  );
}
