import React from "react";
import { TouchableOpacity } from "react-native";
import SideBarIcon from "./SideBarIcon";
import SideBarLabel from "./SideBarLabel";
import {DrawerNavigationHelpers} from "@react-navigation/drawer/lib/typescript/src/types";

type SideBarButtonProps = {
  label: string;
  iconColor?: ColorType;
  isActive?: boolean;
  navigation:  DrawerNavigationHelpers
  route: string;
};

type ColorType = "normal" | "golden" | "red";

export default function SideBarButton({
  label,
  iconColor = "normal",
  isActive = false,
    navigation,
    route
}: SideBarButtonProps) {
  const buttonBg = isActive ? "bg-themys-dune/50" : "bg-themys-dune/25";

  return (
    <TouchableOpacity
      className={`flex flex-row h-20 justify-center border-sidebar ${buttonBg}`}
      onPress={() => {
        navigation.navigate(route)
      }}
    >
      <SideBarIcon
        className={`basis-[20%] ${isActive && "shadow-glow-sm"} centralized`}
        label={label}
        color={iconColor}
      />
      <SideBarLabel
        className={`basis-[80%] ${isActive && "shadow-glow-sm"} justify-center px-4`}
        label={label}
      />
    </TouchableOpacity>
  );
}
