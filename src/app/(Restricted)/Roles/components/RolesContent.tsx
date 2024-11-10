import { View } from "react-native";
import React from "react";
import Button from "../../../../common/components/Button";

export default function RolesContent() {
  return (
    <View className="flex flex-col shrink">
      <View className="basis-1/6 justify-center items-center"></View>
      <View className="basis-4/6 justify-center items-center gap-20 w-full px-7 shrink">
        <Button
          title={"DM"}
          path={"/(Restricted)/Campaigns/screens/CampaignsScreen"}
        />
        <Button.Touchable
          title={"Player"}
          onPress={() => console.log("Player Button touched")}
        />
      </View>
      <View className="basis-1/6 justify-center items-center"></View>
    </View>
  );
}
