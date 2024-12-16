import React, { Dispatch, SetStateAction, useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import Text from "../Text";

type option = {
  label: string;
  value: number | string;
};

type props = {
  label?: string;
  placeholder?: string;
  options: option[];
  selectedValue: string | number | null;
  setterHandler: Dispatch<SetStateAction<string | number | null>>;
};

export default function Dropdown({
  label,
  placeholder = "Select an Option",
  options,
  selectedValue,
  setterHandler,
}: props) {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState<string | null>(null);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const selectItem = (label: string, value: string | number) => {
    setterHandler(value);
    setSelectedLabel(label);
    setDropdownVisible(false);
  };

  return (
    <>
      {label && <Text className={`text-decorated pl-2 mb-2`}>{label}</Text>}
      <TouchableOpacity
        onPress={toggleDropdown}
        className="input-base flex-row justify-between items-center"
      >
        <Text>{selectedLabel ? selectedLabel : placeholder}</Text>
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
              onPress={() => selectItem(item.label, item.value)}
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
