import React from "react";
import { View } from "react-native";
import Button from "../../../../../common/components/Button";
import { formatDate } from "../services/subtitleService";
import { useRouter } from "expo-router";

type CampaignData = {
  id: number;
  name: string;
  next_session: Date;
};

type CampaignItemProps = {
  item: CampaignData;
};

export const CampaignItem = ({ item }: CampaignItemProps) => {
  const router = useRouter();

  const mainButtonHandler = (id: number) => {
    console.log(`Main click ${id}`);
    router.push("_navigation/Player/Characters");
  };

  return (
    <View className="mb-8 w-full">
      <Button.Robust
        title={item.name}
        subtitle={formatDate(item.next_session)}
        onPressMain={() => mainButtonHandler(item.id)}
        onPressOptions={() => console.log(`Options Click ${item.id}`)}
      />
    </View>
  );
};
