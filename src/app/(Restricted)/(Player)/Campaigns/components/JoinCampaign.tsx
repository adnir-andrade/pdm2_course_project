import { View } from "react-native";
import React from "react";
import Button from "../../../../../common/components/Button";

export default function JoinCampaign() {
  return (
    <View className="mb-16">
      <Button.Slim
        title="Join Campaign"
        onPress={() => console.log(`Join Campaign`)}
      />
    </View>
  );
}
