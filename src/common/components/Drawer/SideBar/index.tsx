import React from "react";
import { ScrollView, View } from "react-native";
import Profile from "./components/Profile";
import SideBarButton from "./components/SideBarButton";
import { DrawerContentComponentProps } from "@react-navigation/drawer";

type SideBarProps = {} & DrawerContentComponentProps;

export default function SideBar({ ...rest }: SideBarProps) {
  console.log("SideBar", rest);
  // TODO: RECUPERAR AQUI O REST E UTILIZAR
  return (
    <View className={`flex bg-themys-cod-gray shadow-lg mb-96`}>
      <View className={`basis-[40%] items-center`}>
        <Profile />
      </View>
      <ScrollView className={`h-full`} bounces={false}>
        {/*TODO: Next step -> Render buttons with Drawer's info*/}
        <View className={`gap-1 mb-20`}>
          <SideBarButton isActive={true} label={`Character Sheet`} />
          <SideBarButton isActive={false} label={`Inventory`} />
          <SideBarButton isActive={false} label={`Journal`} />
        </View>
        <View className={`gap-1 mb-10`}>
          <SideBarButton iconColor={"golden"} label={`Character Selection`} />
          <SideBarButton iconColor={"golden"} label={`Campaign Selection`} />
          <SideBarButton iconColor={"golden"} label={`Home`} />
        </View>
        <View className={`mb-2`}>
          <SideBarButton iconColor={"red"} label={`Log Out`} />
        </View>
      </ScrollView>
    </View>
  );
}
