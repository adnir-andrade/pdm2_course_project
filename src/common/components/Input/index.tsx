import { TextInput, TextInputProps, View } from "react-native";
import React from "react";
import Text from "../Text";

type InputProp = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
} & TextInputProps;

export default function Input({
  label,
  value,
  onChangeText,
  ...rest
}: InputProp) {
  return (
    <>
      {label && <Text className={`text-decorated pl-2 mb-2`}>{label}</Text>}
      <View className={`input-base justify-center`}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          className="text-themys-soft-peach font-cinzel-regular text-lg"
          placeholder={label}
          placeholderTextColor="rgba(241, 232, 232, 0.45)"
          {...rest}
        />
      </View>
    </>
  );
}
