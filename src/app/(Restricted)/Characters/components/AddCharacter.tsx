import { View } from "react-native";
import React from "react";
import Button from "../../../../common/components/Button";

export default function AddCharacter() {
  return (
    <View className="mb-16">
      <Button.Slim
        title="New Character"
        onPress={() => console.log(`Add Character`)}
      />
    </View>
  );
}
