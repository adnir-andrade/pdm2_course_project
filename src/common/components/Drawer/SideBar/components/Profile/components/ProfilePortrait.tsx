import React from "react";
import { ImageBackground, View, ViewProps } from "react-native";

type ProfilePortraitProps = {} & ViewProps;

export default function ProfilePortrait({ ...rest }: ProfilePortraitProps) {
  //TODO: Use global state to get Character Image
  const imagePath = require("../../../../../../../../assets/images/Hooded-figure.jpg");

  return (
    <View {...rest}>
      <View className={`rounded-portrait`}>
        <ImageBackground
          source={imagePath}
          className="h-full rounded-full overflow-hidden"
        />
      </View>
    </View>
  );
}
