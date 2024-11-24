import { View } from "react-native";
import React from "react";
import Text from "../../Text";
import Cat from "../../../../../assets/svgs/Cat.svg";
import FancyLine from "./components/FancyLine";

type Props = {
  title: string;
};

export default function Card({ title }: Props) {
  return (
    <>
      <View className="fullscreen card-title justify-center">
        <View className={`fullscreen absolute left-0 justify-center ml-4`}>
          <Cat width={40} height={40} fill={"#cfbe86"} />
        </View>
        <View className={`centralized`}>
          <Text className={`text text-2xl`}>{title}</Text>
        </View>
      </View>
      <FancyLine />
    </>
  );
}
