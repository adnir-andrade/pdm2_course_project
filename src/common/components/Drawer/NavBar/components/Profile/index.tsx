import React from "react";
import { TouchableOpacity, View, ViewProps } from "react-native";

type Props = {} & ViewProps;

export default function Profile({ ...rest }: Props) {
  //TODO: Use global state to get User Profile Pic

  return (
    <View {...rest}>
      <TouchableOpacity
        className={`rounded-portrait h-[85%] centralized`}
        onPress={() => console.log("Profile Clicked!")}
      ></TouchableOpacity>
    </View>
  );
}
