import React, { Dispatch, SetStateAction, useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import Text from "../Text";

type option = {
  label: string;
  value: number | string;
};

type props = {
  label: string;
  options: option[];
  selectedValue: string | null;
  setterHandler: Dispatch<SetStateAction<string | null>>;
};

export default function Dropdown({
  label,
  options,
  selectedValue,
  setterHandler,
}: props) {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const selectItem = (value: string) => {
    setterHandler(value);
    setDropdownVisible(false);
  };

  return (
    <>
      <Text className={`text-decorated`}>{label}</Text>
      <TouchableOpacity
        onPress={toggleDropdown}
        className="input-base flex-row justify-between items-center mt-1"
      >
        <Text>{selectedValue ? selectedValue : "Select an option"}</Text>
        <Feather
          name={dropdownVisible ? "chevron-up" : "chevron-down"}
          size={20}
          color="gray"
        />
      </TouchableOpacity>
      {dropdownVisible && (
        <FlatList
          data={options}
          keyExtractor={(item) => item.value.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => selectItem(item.value.toString())}
              className="p-2 border border-themys-straw/20"
            >
              <Text>{item.label}</Text>
            </TouchableOpacity>
          )}
          className="border shadow-basic rounded mt-1"
        />
      )}
    </>
  );
}
