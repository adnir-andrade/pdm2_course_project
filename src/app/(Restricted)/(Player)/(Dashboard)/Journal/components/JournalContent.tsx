import { View, ViewProps } from "react-native";
import React from "react";
import Card from "../../../../../../common/components/Card";
import EntriesList from "./EntriesList";

type Props = {} & ViewProps;

export default function JournalContent({ ...rest }: Props) {
  return (
    <View {...rest}>
      <Card>
        <View className="flex flex-col items-center h-full overflow-hidden">
          <View className="basis-[12.5%] w-full px-4">
            <Card.Title title="Journal" />
          </View>
          <View className="basis-[87.5%] w-full mt-10">
            <EntriesList />
          </View>
        </View>
      </Card>
    </View>
  );
}
