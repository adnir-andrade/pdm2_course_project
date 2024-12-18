import React from "react";
import { View } from "react-native";
import Button from "../../../../../common/components/Button";
import { useRouter } from "expo-router";
import { formatDate } from "../../../../../helpers/dateHelpers";
import useCampaignState from "../../../../../states/useCampaignState";
import { Campaign } from "../../../../../schemas/Campaign";

type CampaignItemProps = {
  item: Campaign;
};

export const CampaignItem = ({ item }: CampaignItemProps) => {
  const router = useRouter();
  const { setCampaign } = useCampaignState();
  const nextSessionDate = new Date(item.next_session);
  const isValidDate = !isNaN(nextSessionDate.getTime());

  const mainButtonHandler = () => {
    setCampaign(item);
    router.push(`_navigation/Player/Characters`);
  };

  return (
    <View className="mb-8 w-full">
      <Button.Robust
        title={item.name}
        subtitle={isValidDate ? formatDate(nextSessionDate) : "Invalid date"}
        onPressMain={() => mainButtonHandler()}
        onPressOptions={() => console.log(`Options Click ${item.id}`)}
      />
    </View>
  );
};
