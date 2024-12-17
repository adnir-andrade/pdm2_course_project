import React from "react";
import { View } from "react-native";
import Button from "../../../../../common/components/Button";
import { useRouter } from "expo-router";
import { formatDate } from "../../../../../helpers/dateHelpers";

type CampaignData = {
  id: string;
  name: string;
  next_session: Date;
};

type CampaignItemProps = {
  item: CampaignData;
};

export const CampaignItem = ({ item }: CampaignItemProps) => {
  const router = useRouter();
  const nextSessionDate = new Date(item.next_session);
  const isValidDate = !isNaN(nextSessionDate.getTime());

  const mainButtonHandler = (id: string) => {
    console.log(`Main click ${id}`);
    router.push("_navigation/Player/Characters");
  };

  return (
    <View className="mb-8 w-full">
      <Button.Robust
        title={item.name}
        subtitle={isValidDate ? formatDate(nextSessionDate) : "Invalid date"}
        onPressMain={() => mainButtonHandler(item.id)}
        onPressOptions={() => console.log(`Options Click ${item.id}`)}
      />
    </View>
  );
};
