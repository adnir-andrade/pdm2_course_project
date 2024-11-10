import { FlatList, View } from "react-native";
import React from "react";
import { campaigns } from "../../../../mocks/MOCK_CAMPAIGN";
import Text from "../../../../common/components/Text";

type CampaignsData = {
  id: number;
  name: string;
  next_session: Date;
};

export default function CampaignsContent() {
  const formatDate = (date: Date): string => {
    const formattedDate = date.toLocaleDateString();
    const dayAbbreviation = date.toLocaleDateString(undefined, {
      weekday: "short",
    });
    return `${formattedDate}, ${dayAbbreviation}`;
  };

  const renderItem = ({ item }: { item: CampaignsData }) => (
    <View className="p-4 border-b border-gray-300">
      <Text
        className="text-3xl font-cinzel-decorative-black text-themys-straw"
        adjustsFontSizeToFit={true}
        numberOfLines={1}
      >
        {item.name}
      </Text>
      <Text>{formatDate(item.next_session)}</Text>
    </View>
  );

  return (
    <View className="flex-1 px-7 pt-3">
      <FlatList
        data={campaigns}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        className="flex-1"
      />
    </View>
  );
}
