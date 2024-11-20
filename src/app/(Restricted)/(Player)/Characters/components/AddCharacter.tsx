import { View } from "react-native";
import React from "react";
import Button from "../../../../../common/components/Button";

export default function AddCharacter() {
  const addCharacterHandler = () => {
    console.log(`Add Character`);
  };

  return (
    <View className="mb-16">
      <Button.Slim title="New Character" onPress={addCharacterHandler} />
    </View>
  );
}
