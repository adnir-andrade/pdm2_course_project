import React from "react";
import { View } from "react-native";
import Button from "../../../../../common/components/Button";
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
  const nextSessionDate = new Date(item.next_session);
  const isValidDate = !isNaN(nextSessionDate.getTime());

  return (
    <View className="mb-8 w-full">
      <Button.Robust
        title={item.name}
        subtitle={isValidDate ? formatDate(nextSessionDate) : "Invalid date"}
        onPressMain={() => console.log(`Main click ${item.id}`)}
        onPressOptions={() => console.log(`Options Click ${item.id}`)}
      />
    </View>
  );
};
