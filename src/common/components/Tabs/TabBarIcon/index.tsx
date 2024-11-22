import React from "react";
import { Text, View } from "react-native";
import Icon from "react-native-ico-rpg-game";

type CustomTabProps = {
  routeName: string;
  focused: boolean;
};

const getIcon = (routeName: string): string => {
  if (routeName === "DM") return "hood";
  if (routeName === "Home") return "campfire";
  if (routeName === "Player") return "helmet";

  return "perspective-dice-random";
};

export default function TabBarIcon({ routeName, focused }: CustomTabProps) {
  const chosenColor = focused ? "#c29f41" : "#cfbe86";

  return (
    <View className={`shadow-lg h-full w-full pt-8 centralized`}>
      <Icon
        name={getIcon(routeName)}
        color={chosenColor}
        width={35}
        height={35}
      />
      <Text className={`text ${focused && "text-xl"}`}>{routeName}</Text>
    </View>
  );
}
