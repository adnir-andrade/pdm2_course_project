import React from "react";
import {View} from "react-native";
import Profile from "./components/Profile";
import SideBarButton from "./components/SideBarButton";
import {DrawerContentComponentProps, DrawerContentScrollView} from "@react-navigation/drawer";

type SideBarProps = {} & DrawerContentComponentProps;

export default function SideBar({ state, descriptors, ...props }: SideBarProps) {
  return (
    <View className={`flex h-full bg-themys-cod-gray shadow-lg mb-96`}>
      <View className={`basis-[40%] items-center`}>
        <Profile />
      </View>
      <DrawerContentScrollView className={`h-full`} bounces={false}>
        <View className={`gap-1 mb-20`}>
          <SideBarButton
              label={"Character Sheet"}
              iconColor={"normal"}
              isActive={true}
              navigation={props.navigation}
              route={"index"}
          />
          <SideBarButton
              label={"Inventory"}
              iconColor={"normal"}
              isActive={true}
              navigation={props.navigation}
              route={"Inventory"}
          />
          <SideBarButton
              label={"Journal"}
              iconColor={"normal"}
              isActive={true}
              navigation={props.navigation}
              route={"Journal"}
          />
        </View>
        <View className={`gap-1 mb-10`}>
          <SideBarButton
              label={"Character Selection"}
              iconColor={"golden"}
              navigation={props.navigation}
              route={"CharacterSelection"}
          />
          <SideBarButton
              label={"Campaign Selection"}
              iconColor={"golden"}
              navigation={props.navigation}
              route={"CampaignSelection"}
          />
          <SideBarButton
              label={"Home"}
              iconColor={"golden"}
              navigation={props.navigation}
              route={"Home"}
          />
        </View>
        <View className={`mb-2`}>
          <SideBarButton
              label={"Log Out"}
              iconColor={"red"}
              navigation={props.navigation}
              route={"LogOut"}
          />
        </View>
      </DrawerContentScrollView>
    </View>
  );
}
