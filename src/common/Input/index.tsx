import { TextInput, TextInputProps, View } from "react-native";
import React, { useState } from "react";

type InputProp = {
  label: string;
} & TextInputProps;

export default function Input({ label, ...rest }: InputProp) {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <View
      className={`w-full h-[46] px-4 py-2 bg-themys-dune justify-center rounded border border-themys-straw shadow-input`}
    >
      <TextInput
        value={value}
        onChangeText={setValue}
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
