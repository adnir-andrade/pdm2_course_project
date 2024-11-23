import React from "react";
import { View } from "react-native";
import { DrawerHeaderProps } from "@react-navigation/drawer";
import Profile from "./components/Profile";
import NavBarTitle from "./components/NavBarTitle";
import DrawerButton from "./components/DrawerButton";

type NavBarProps = {} & DrawerHeaderProps;

export default function NavBar({ ...props }: NavBarProps) {
  return (
    <View className={`flex flex-row bg-themys-cod-gray h-28 pt-14`}>
      <DrawerButton
        className={`basis-[20%] centralized`}
        onPress={() => props.navigation.toggleDrawer()}
      />
      <NavBarTitle className={`basis-[60%] justify-center`} title={"Themys"} />
      <Profile className={`basis-[20%] items-center`} />
    </View>
  );
}
