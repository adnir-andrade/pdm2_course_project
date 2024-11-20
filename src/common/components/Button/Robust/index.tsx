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
  return (
    <>
      <TouchableOpacity className={`button-robust`} onPress={onPressMain}>
        <Title title={title} />
        <View className="w-full h-[0.4] pr-36">
          <Line.Slim />
        </View>
        <Text className="text-simple">{subtitle}</Text>
      </TouchableOpacity>
      <OptionsButton onPress={onPressOptions} />
    </>
  );
}
