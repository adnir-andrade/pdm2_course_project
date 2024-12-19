import { View } from "react-native";
import React from "react";
import UtilitiesButtons from "./UtilitiesButtons";
import EntryText from "./EntryText";
import { Entry } from "../../../../../../../../schemas/Entry";

type Props = {
  entry: Entry;
  refreshCallback: () => void;
  setEntry: (entry: Entry) => void;
  setModalVisibility: (flag: boolean) => void;
};

export default function EntryContent({
  entry,
  refreshCallback,
  setEntry,
  setModalVisibility,
}: Props) {
  const editCallback = () => {
    setEntry(entry);
    setModalVisibility(true);
  };

  return (
    <View className="px-2 pb-2 -mt-5">
      <EntryText content={entry.content!} />
      <View className={`line-faded my-4`} />
      <UtilitiesButtons
        id={entry.id!}
        refreshCallback={refreshCallback}
        editCallback={editCallback}
      />
    </View>
  );
}
