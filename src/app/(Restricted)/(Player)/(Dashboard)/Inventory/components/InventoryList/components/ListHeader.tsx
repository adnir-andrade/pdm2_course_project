import { View } from "react-native";
import React from "react";
import Text from "../../../../../../../../common/components/Text";
import { Icon } from "@rneui/base";

export default function ListHeader() {
  return (
    <View className="flex flex-row justify-between w-full px-4 py-2 border-b border-themys-straw/15 shadow-basic blur-2xl mt-4">
      <View className={`basis-[70%] opacity-40`}>
        <Text>Name</Text>
      </View>
      <View className={`basis-[15%] items-center opacity-40`}>
        <Text>#</Text>
      </View>
      <View className={`basis-[15%] items-center opacity-40`}>
        <Icon name={`barbell-outline`} type={`ionicon`} color={`gray`} />
      </View>
    </View>
  );
}
