import { View } from "react-native";
import React from "react";
import Button from "../../../../common/components/Button";
import Text from "../../../../common/components/Text";
import useUserState from "../../../../states/useUserState";
import { useRouter } from "expo-router";

export default function HomeContent() {
  const { username } = useUserState();

  const router = useRouter();

  const dmHandler = () => {
    router.push("_navigation/DM");
  };

  const playerHandler = () => {
    router.push("_navigation/Player");
  };

  return (
    <View className="flex flex-col shrink">
      <View className="basis-1/6 justify-center items-center">
        <Text.Adorned>{username}</Text.Adorned>
      </View>
      <View className="basis-4/6 justify-center items-center gap-20 w-full px-7 shrink">
        <Button.Touchable title={"DM"} onPress={dmHandler} />
        <Button.Touchable title={"Player"} onPress={playerHandler} />
      </View>
      <View className="basis-1/6 justify-center items-center"></View>
    </View>
  );
}
