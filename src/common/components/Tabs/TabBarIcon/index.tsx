import React from "react";
import { Text, View } from "react-native";
import EvilBook from "../../../../../assets/svgs/EvilBook.svg";
import TavernSign from "../../../../../assets/svgs/TavernSign.svg";
import Character from "../../../../../assets/svgs/Character.svg";
import QuestionDice from "../../../../../assets/svgs/QuestionDice.svg";

type CustomTabProps = {
  routeName: string;
  focused: boolean;
};

const getIcon = (routeName: string, chosenColor: string) => {
  if (routeName === "DM")
    return <EvilBook width={35} height={35} color={chosenColor} />;
  if (routeName === "Home")
    return <TavernSign width={35} height={35} color={chosenColor} />;
  if (routeName === "Player")
    return <Character width={35} height={35} color={chosenColor} />;

  return <QuestionDice width={35} height={35} color={chosenColor} />;
};

export default function TabBarIcon({ routeName, focused }: CustomTabProps) {
  const chosenColor = focused ? "#c29f41" : "#cfbe86";

  return (
    <View className={`flex flex-col shadow-lg h-full w-full`}>
      <View className={`basis-[40%] h-full w-full items-center pt-2`}>
        {getIcon(routeName, chosenColor)}
      </View>
      <View className={`pt-7 h-full`}>
        <Text
          className={`basis-[60%] text ${focused && "text-xl"} text-center leading-6`}
        >
          {routeName}
        </Text>
      </View>
    </View>
  );
}
