import React from "react";
import { View } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import StackTitle from "./components/StackTitle";
import StackBackButton from "./components/StackBackButton";

type StackHeader = {} & NativeStackHeaderProps;

export default function StackHeader({ ...props }: StackHeader) {
  const { navigation, options } = props;

  return (
    <View className={`bg-themys-cod-gray h-28 pt-14`}>
      <StackTitle
        title={options.headerTitle as string}
        className={`centralized h-full`}
      />
      {navigation.canGoBack() && (
        <StackBackButton
          onPress={() => navigation.goBack()}
          className={`w-[20%] h-full absolute inset-y-14 centralized`}
        />
      )}
    </View>
  );
}
