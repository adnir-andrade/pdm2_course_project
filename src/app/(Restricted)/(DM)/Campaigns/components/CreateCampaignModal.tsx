import { Pressable, View } from "react-native";
import React, { useState } from "react";
import useUserState from "../../../../../states/useUserState";
import Text from "../../../../../common/components/Text";
import Input from "../../../../../common/components/Input";
import Button from "../../../../../common/components/Button";

type Props = {
  closeModalCallback: () => void;
  onCreation: () => void;
};

export default function CreateCampaignModal({
  closeModalCallback,
  onCreation,
}: Props) {
  const { userId, token } = useUserState();
  // const { createCharacter } = useCreateCharacter();
  const [campaignName, setCampaignName] = useState<string>("");

  const handleCreate = async () => {
    const data = {
      dm_id: userId,
      name: campaignName,
    };

    console.log(data);

    // const result = characterSchema.safeParse(data);

    // if (!result.success) {
    //   const errors = result.error.format();
    //   let errorMessage = "";
    //   if (errors.name?._errors) {
    //     errorMessage += `Name can't be blank\n`;
    //   }
    //   Alert.alert("Ops!", errorMessage.trim());
    //   return;
    // }

    const campaign = {
      dm_id: data.dm_id,
      name: data.name,
    };

    // await createCharacter(character, token!);
    onCreation();
  };

  return (
    <View className="flex-1 justify-center items-center bg-black/75">
      <View className="bg-themys p-6 rounded-card-8 h-[80%] w-[90%] overflow-hidden">
        <View className={`basis-1/12`}>
          <Pressable onPress={closeModalCallback} className="mt-4">
            <Text className="text-themys-tussock text-2xl font-cinzel-bold text-right">
              X
            </Text>
          </Pressable>
        </View>
        <View className={`basis-full`}>
          <Input
            label={"Name"}
            value={campaignName}
            onChangeText={setCampaignName}
          />
          <View className={`mt-12`}>
            <Button.Rectangular onPress={handleCreate}>
              <Text>Create Campaign</Text>
            </Button.Rectangular>
          </View>
        </View>
      </View>
    </View>
  );
}
