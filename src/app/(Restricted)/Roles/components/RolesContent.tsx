import { View } from "react-native";
import React from "react";
import Button from "../../../../common/components/Button";
import Text from "../../../../common/components/Text";
import useUserState from "../../../../states/useUserState";

export default function RolesContent() {
  const { username } = useUserState();

  return (
    <View className="flex flex-col shrink">
      <View className="basis-1/6 justify-center items-center">
        <Text.Adorned>{username}</Text.Adorned>
      </View>
      <View className="basis-4/6 justify-center items-center gap-20 w-full px-7 shrink">
        <Button title={"DM"} path={"_navigation/DM/Campaigns"} />
        <Button title={"Player"} path={"_navigation/Player/Characters"} />
      </View>
      <View className="basis-1/6 justify-center items-center"></View>
    </View>
  );
}
