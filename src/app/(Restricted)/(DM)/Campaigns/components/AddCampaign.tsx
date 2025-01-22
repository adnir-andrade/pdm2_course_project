import { Modal, View } from "react-native";
import React, { useState } from "react";
import Button from "../../../../../common/components/Button";
import CreateCampaignModal from "./CreateCampaignModal";

type Props = {
  onCreation: () => void;
};

export default function AddCampaign({ onCreation }: Props) {
  const [modalVisible, setModalVisible] = useState(false);

  const addCampaignHandler = () => {
    setModalVisible(true);
  };

  const closeModalHandler = () => {
    setModalVisible(false);
  };

  return (
    <View className="mb-16">
      <Button.Slim title="New Campaign" onPress={addCampaignHandler} />
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModalHandler}
      >
        <CreateCampaignModal
          closeModalCallback={closeModalHandler}
          onCreation={onCreation}
        />
      </Modal>
    </View>
  );
}
