import { View } from "react-native";
import React from "react";
import UtilitiesButtons from "./UtilitiesButtons";
import EntryText from "./EntryText";

type Props = { content: string; id: string; refreshCallback: () => void };

export default function EntryContent({ content, id, refreshCallback }: Props) {
  return (
    <View className="px-2 pb-2 -mt-5">
      <EntryText content={content} />
      <View className={`line-faded my-4`} />
      <UtilitiesButtons id={id} refreshCallback={refreshCallback} />
    </View>
  );
}
