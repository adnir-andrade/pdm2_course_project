import React from "react";
import { View, ViewProps } from "react-native";
import Icon from "react-native-ico-rpg-game";
import { color } from "@rneui/base";

type SideBarIconProps = {
  label: string;
  color: ColorType;
} & ViewProps;

type ColorType = "normal" | "golden" | "red";

const getIcon = (label: string): string => {
  if (label === "Character Sheet") return "emerald";
  if (label === "Inventory") return "potion";
  if (label === "Journal") return "quill-ink";

  return "perspective-dice-random";
};

const getColor = (color: ColorType): string => {
  if (color === "golden") return "#c29f41";
  if (color === "red") return "#881822";
  return "#CFBE86";
};

export default function SideBarIcon({ label, ...rest }: SideBarIconProps) {
  return (
    <View {...rest}>
      <Icon
        name={getIcon(label)}
        width={40}
        height={40}
        color={getColor(color)}
      />
    </View>
  );
}
