import React, {useEffect, useState} from "react";
import { ScrollView, View } from "react-native";
import Profile from "./components/Profile";
import SideBarButton from "./components/SideBarButton";
import { DrawerContentComponentProps } from "@react-navigation/drawer";

type SideBarProps = {} & DrawerContentComponentProps;

type Categories = {
  character: CategoryItem[];
  player: CategoryItem[];
  actions: CategoryItem[];
};

type CategoryItem = {
  [key: string]: {
    label: string;
    color: ColorType;
  };
};

type ColorType = "normal" | "golden" | "red";

const categories : Categories = {
  character: [
    { index: { label: "Character Sheet", color: "normal" } },
    { Inventory: { label: "Inventory", color: "normal" } },
    { Journal: { label: "Journal", color: "normal" } },
  ],
  player: [
    { CharacterSelection: { label: "Character Selection", color: "golden" } },
    { CampaignSelection: { label: "Campaign Selection", color: "golden" } },
    { Home: { label: "Home", color: "golden" } },
  ],
  actions: [
    { LogOut: { label: "Log Out", color: "red" } },
  ],
};

export default function SideBar({ state, navigation, descriptors, ...rest }: SideBarProps) {
  const renderButtons = (category: CategoryItem[]) => {
    return category.map((item) => {
      const routeName = Object.keys(item)[0];
      const { label, color } = item[routeName];

      const routeIndex = state.routes.findIndex(route => route.name === routeName);
      const isActive = state.index === routeIndex;

      return (
          <SideBarButton
              key={routeName}
              label={label}
              iconColor={color}
              isActive={isActive}
          />
      );
    });
  };

  return (
    <View className={`flex h-full bg-themys-cod-gray shadow-lg mb-96`}>
      <View className={`basis-[40%] items-center`}>
        <Profile />
      </View>
      <ScrollView className={`h-full`} bounces={false}>
        <View className={`gap-1 mb-20`}>
          {renderButtons(categories.character)}
        </View>
        <View className={`gap-1 mb-10`}>
          {renderButtons(categories.player)}
        </View>
        <View className={`mb-2`}>
          {renderButtons(categories.actions)}
        </View>
      </ScrollView>
    </View>
  );
}
