import React from "react";
import { View } from "react-native";
import ProfileTitle from "./components/ProfileTitle";
import ProfilePortrait from "./components/ProfilePortrait";
import ProfileSubtitle from "./components/ProfileSubtitle";

export default function Profile() {
  return (
    <View className={`flex h-full items-center`}>
      <ProfileTitle
        className={`basis-[33%] min-w-full pt-16 overflow-hidden px-4`}
      />
      <ProfilePortrait
        className={`basis-3/6 min-w-full min-h-fit items-center`}
      />
      <ProfileSubtitle className={`basis-1/6 min-w-full h-full py-3`} />
    </View>
  );
}
