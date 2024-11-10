import { View } from "react-native";
import React from "react";
import Button from "../../../../common/components/Button";

export default function AddCampaign() {
  return (
    <View className="mb-16">
      <Button.Slim
        title="New Campaign"
        onPress={() => console.log(`Add Campaign`)}
      />
    </View>
  );
}
