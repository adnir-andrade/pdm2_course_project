import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import React from "react";
import Text from "../../Text";
import Line from "../../Line";
import Title from "./components/Title";
import OptionsButton from "./components/OptionsButton";

type ButtonProps = {
  title: string;
  subtitle: string;
  onPressMain: () => void;
  onPressOptions: () => void;
} & TouchableOpacityProps;

export default function Button({
  title,
  subtitle,
  onPressMain,
  onPressOptions,
}: ButtonProps) {
  const roundedBorders =
    "rounded-tl-[30] rounded-br-[30] rounded-bl-[15] rounded-tr-[15]";

  return (
    <>
      <TouchableOpacity
        className={`w-full h-[70] py-3 pl-5 pr-16 bg-themys-dune border border-themys-straw shadow-basic ${roundedBorders}`}
        onPress={onPressMain}
      >
        <Title title={title} />
        <View className="w-full h-[0.4] pr-36">
          <Line.Slim />
        </View>
        <Text className="font-gowun-regular text-themys-soft-peach">
          {subtitle}
        </Text>
      </TouchableOpacity>
      <OptionsButton onPress={onPressOptions} />
    </>
  );
}
