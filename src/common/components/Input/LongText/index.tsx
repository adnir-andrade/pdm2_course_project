import { ScrollView, TextInput, TextInputProps, View } from "react-native";
import React from "react";
import Text from "../../Text";

type InputProp = {
  label?: string;
  value: string;
  onChangeText: (text: string) => void;
  scrollViewRef?: React.RefObject<ScrollView>;
} & TextInputProps;

export default function Input({
  label,
  value,
  onChangeText,
  scrollViewRef,
  ...rest
}: InputProp) {
  return (
    <>
      {label && <Text className="text-decorated pl-2 mb-2">{label}</Text>}
      <View className={`input-long-text min-h-[100]`}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          multiline={true}
          onContentSizeChange={() => {
            if (scrollViewRef)
              scrollViewRef.current?.scrollToEnd({ animated: true });
          }}
          className="text-themys-soft-peach font-cinzel-regular text-lg text-justify rounded-md mt-1"
          placeholder={label}
          placeholderTextColor="rgba(241, 232, 232, 0.45)"
          autoCapitalize={"sentences"}
          autoCorrect={false}
          scrollEnabled={true}
          {...rest}
        />
      </View>
    </>
  );
}
