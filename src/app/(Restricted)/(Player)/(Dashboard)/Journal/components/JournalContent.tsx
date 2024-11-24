import { View, ViewProps } from "react-native";
import React from "react";
import Card from "../../../../../../common/components/Card";
import Button from "../../../../../../common/components/Button";
import AddButton from "../../../../../../../assets/svgs/AddButton.svg";
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
            <Button.Rectangular onPress={() => console.log("Clicked!")}>
              <AddButton width={60} height={60} />
            </Button.Rectangular>
            <View className={`my-6`}>
              <EntriesList />
            </View>
          </View>
        </View>
      </Card>
    </View>
  );
}
