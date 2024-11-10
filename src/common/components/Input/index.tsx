import { TextInput, TextInputProps, View } from "react-native";
import React, { useState } from "react";

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
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <View
      className={`w-full h-[46] px-4 py-2 bg-themys-dune justify-center rounded border border-themys-straw shadow-input`}
    >
      <TextInput
        value={value}
        onChangeText={onChangeText}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="text-themys-soft-peach font-cinzel-regular text-lg"
        placeholder={label}
        placeholderTextColor="rgba(241, 232, 232, 0.45)"
        {...rest}
      />
    </View>
  );
}
