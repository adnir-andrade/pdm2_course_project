import { FlatList, View } from "react-native";
import React from "react";
import { campaigns } from "../../../../mocks/MOCK_CAMPAIGN";
import Button from "../../../../common/components/Button";
import { formatDate } from "../services/subtitleService";

type CampaignsData = {
  id: number;
  name: string;
  next_session: Date;
};

export default function CampaignsContent() {
  const renderItem = ({ item }: { item: CampaignsData }) => (
    <View className="mb-8 w-full">
      <Button.Robust
        title={item.name}
        subtitle={formatDate(item.next_session)}
        onPressMain={() => console.log(`Main click ${item.id}`)}
        onPressOptions={() => console.log(`Options Click ${item.id}`)}
      />
    </View>
  );

  return (
    <View className="flex-1 px-7 pt-10">
      <FlatList
        data={campaigns}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        className="flex-1"
        showsVerticalScrollIndicator={false}
        ListFooterComponent={() => (
          <View className="mb-16">
            <Button.Slim
              title="New Campaign"
              onPress={() => console.log(`Add Campaign`)}
            />
          </View>
        )}
      />
    </View>
  );
}
