import React from "react";
import { View } from "react-native";
import SideBarIcon from "./SideBarIcon";
import SideBarLabel from "./SideBarLabel";

type SideBarButtonProps = {
  label: string;
  iconColor?: ColorType;
  isActive?: boolean;
};

type ColorType = "normal" | "golden" | "red";

export default function SideBarButton({
  label,
  iconColor = "normal",
  isActive = false,
}: SideBarButtonProps) {
  const buttonBg = isActive ? "bg-themys-dune/50" : "bg-themys-dune/25";

  return (
    <View
      className={`flex flex-row h-20 justify-center border-sidebar ${buttonBg}`}
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
    </View>
  );
}
