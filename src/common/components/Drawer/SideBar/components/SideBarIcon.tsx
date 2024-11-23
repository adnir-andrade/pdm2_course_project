import React from "react";
import { View, ViewProps } from "react-native";
import Icon from "react-native-ico-rpg-game";

type SideBarIconProps = {
  label: string;
  color: string;
} & ViewProps;

const getIcon = (label: string): string => {
  if (label === "Character Sheet") return "emerald";
  if (label === "Inventory") return "potion";
  if (label === "Journal") return "quill-ink";
  if (label === "Character Selection") return "player";
  if (label === "Campaign Selection") return "scroll-unfurled";
  if (label === "Home") return "campfire";
  if (label === "Log Out") return "sideswipe";

  return "perspective-dice-random";
};

const getColor = (color: string): string => {
  if (color === "golden") return "#c29f41";
  if (color === "red") return "#881822";
  return "#CFBE86";
};

export default function SideBarIcon({
  label,
  color,
  ...rest
}: SideBarIconProps) {
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
