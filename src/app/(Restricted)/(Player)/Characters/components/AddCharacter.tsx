import { Modal, View } from "react-native";
import React, { useState } from "react";
import Button from "../../../../../common/components/Button";
import CreateCharacter from "./CreateCharacter";

export default function AddCharacter() {
  const [modalVisible, setModalVisible] = useState(false);

  const addCharacterHandler = () => {
    setModalVisible(true);
  };

  const closeModalHandler = () => {
    setModalVisible(false);
  };

  return (
    <View className="mb-16">
      <Button.Slim title="New Character" onPress={addCharacterHandler} />
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModalHandler}
      >
        <CreateCharacter onPress={closeModalHandler} />
      </Modal>
    </View>
  );
}
