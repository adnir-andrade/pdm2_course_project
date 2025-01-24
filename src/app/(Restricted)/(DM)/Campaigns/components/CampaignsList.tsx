import { ActivityIndicator, FlatList, View } from "react-native";
import React from "react";
import AddCampaign from "./AddCampaign";
import { CampaignItem } from "./CampaignItem";
import useUserState from "../../../../../states/useUserState";
import { useCampaigns } from "../../../../../hooks/useCampaigns";

export default function CampaignsList() {
  const { userId, token } = useUserState();
  const { campaigns, loading, getCampaignsByUser } = useCampaigns(
    userId,
    token!,
  );

  const refreshCampaigns = async () => {
    await getCampaignsByUser();
  };

  if (loading) {
    return (
      <View className={`flex-1 centralized bg-black`}>
        <ActivityIndicator size={`large`} />
      </View>
    );
  }

  return (
    <FlatList
      data={campaigns}
      renderItem={({ item }) => <CampaignItem item={item} />}
      keyExtractor={(item) => item.id!.toString()}
      className="flex-1"
      showsVerticalScrollIndicator={false}
      ListFooterComponent={() => <AddCampaign onCreation={refreshCampaigns} />}
    />
  );
}
