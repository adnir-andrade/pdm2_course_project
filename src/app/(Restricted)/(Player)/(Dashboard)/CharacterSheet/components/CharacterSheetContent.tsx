import { View } from "react-native";
import React from "react";
import Text from "../../../../../../common/components/Text";
import { Character } from "../../../../../../schemas/Character";
import { useRace } from "../../../../../../hooks/useRace";
import { useKlass } from "../../../../../../hooks/useKlass";

type Props = {
  character: Character;
};

export default function CharacterSheetContent({ character }: Props) {
  const { raceName } = useRace(character.race_id);
  const { klassName } = useKlass(character.klass_id);

  return (
    <View className={`flex-1`}>
      <View className={`items-center py-10 px-8`}>
        <View className={`w-full px-4`}>
          <Text className={`text-center text-peach text-xl`}>
            {`${character.name}, the ${raceName}`}
          </Text>
          <Text className={`text-center text-simple text-xl`}>
            {`Lv ${character.level} ${klassName}`}
          </Text>
        </View>
      </View>
    </View>
  );
}
