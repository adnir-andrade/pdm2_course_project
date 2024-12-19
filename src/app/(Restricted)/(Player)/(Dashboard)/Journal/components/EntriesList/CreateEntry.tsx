import { Alert, Pressable, ScrollView, View } from "react-native";
import useUserState from "../../../../../../../states/useUserState";
import useCharacterState from "../../../../../../../states/useCharacterState";
import { useEntries } from "../../../../../../../hooks/Journal/useEntries";
import { useRef, useState } from "react";
import { Entry, entrySchema } from "../../../../../../../schemas/Entry";
import Text from "../../../../../../../common/components/Text";
import Input from "../../../../../../../common/components/Input";
import Button from "../../../../../../../common/components/Button";

type Props = {
  closeModalCallback: () => void;
  refreshCallback: () => void;
  entry?: Entry | null;
};

export default function CreateEntry({
  closeModalCallback,
  refreshCallback,
  entry,
}: Props) {
  const { token } = useUserState();
  const { character } = useCharacterState();
  const { createEntry, updateEntry } = useEntries(character?.id!, token!);
  const [title, setTitle] = useState<string>(entry?.title || "");
  const [content, setContent] = useState<string>(entry?.content || "");
  const scrollViewRef = useRef<ScrollView>(null);

  const handleCreateEntry = async () => {
    const data = {
      title: title,
      content: content,
      character_id: character?.id!,
    };

    const result = entrySchema.safeParse(data);

    if (!result.success) {
      const errors = result.error.format();
      let errorMessage = "";
      if (errors.title?._errors) {
        errorMessage += `Title can't be blank\n`;
      }
      Alert.alert("Ops!", errorMessage.trim());
      return;
    }

    if (entry) {
      await updateEntry(data, entry.id!);
    } else {
      await createEntry(data);
    }
    closeModalCallback();
    refreshCallback();
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
        <ScrollView className={`basis-full`} ref={scrollViewRef}>
          <View>
            <Input label={"Title"} value={title} onChangeText={setTitle} />
          </View>
          <View className={`mt-6`}>
            <Input.LongText
              placeholder={`It all began when...`}
              value={content}
              onChangeText={setContent}
              scrollViewRef={scrollViewRef}
            />
          </View>
          <View className={`mt-12`}>
            <Button.Rectangular onPress={handleCreateEntry}>
              <Text>{entry ? "Edit Entry" : "Add Entry"}</Text>
            </Button.Rectangular>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
