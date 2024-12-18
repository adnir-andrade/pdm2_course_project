import React from "react";
import { View } from "react-native";
import ProfileTitle from "./components/ProfileTitle";
import ProfilePortrait from "./components/ProfilePortrait";
import ProfileSubtitle from "./components/ProfileSubtitle";
import useCharacterState from "../../../../../../states/useCharacterState";
import { useKlass } from "../../../../../../hooks/useKlass";

export default function Profile() {
  const { character } = useCharacterState();
  const { klassName } = useKlass(character!.klass_id);

  return (
    <View className={`flex h-full items-center`}>
      <ProfileTitle
        characterName={character ? character.name : `Unknown`}
        className={`basis-[33%] min-w-full pt-16 overflow-hidden px-4`}
      />
      <ProfilePortrait
        className={`basis-3/6 min-w-full min-h-fit items-center`}
      />
      <ProfileSubtitle
        klassName={klassName ? klassName : "Unknown"}
        className={`basis-1/6 min-w-full h-full py-3`}
      />
    </View>
  );
}
