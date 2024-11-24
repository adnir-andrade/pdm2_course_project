import React from "react";
import { View, ViewProps } from "react-native";
import Character from "../../../../../../assets/svgs/CharacterAlt.svg";
import Bag from "../../../../../../assets/svgs/Bag.svg";
import LockedBook from "../../../../../../assets/svgs/LockedBook.svg";
import TreasureMap from "../../../../../../assets/svgs/TreasureMap.svg";
import TavernSign from "../../../../../../assets/svgs/TavernSignAlt.svg";
import Exit from "../../../../../../assets/svgs/Exit.svg";
import D20 from "../../../../../../assets/svgs/D20.svg";

type SideBarIconProps = {
  label: string;
  color: string;
} & ViewProps;

const getIcon = (label: string, color: string) => {
  if (label === "Character Sheet") return <D20 width={40} />;
  if (label === "Inventory") return <Bag width={40} fill={color} />;
  if (label === "Journal") return <LockedBook width={40} fill={color} />;
  if (label === "Character Selection") return <Character width={40} />;
  if (label === "Campaign Selection")
    return <TreasureMap width={40} fill={color} />;
  if (label === "Home") return <TavernSign width={40} />;
  if (label === "Log Out") return <Exit width={40} fill={color} />;

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
  return <View {...rest}>{getIcon(label, getColor(color))}</View>;
}
