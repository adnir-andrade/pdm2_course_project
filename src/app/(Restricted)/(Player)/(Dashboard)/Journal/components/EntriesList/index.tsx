import { FlatList, Modal, StyleSheet } from "react-native";
import React, { useState } from "react";
import { ListItem } from "@rneui/themed";
import { Icon } from "@rneui/base";
import ListTitle from "./ListTitle";
import EntryContent from "./EntryContent";
import useUserState from "../../../../../../../states/useUserState";
import useCharacterState from "../../../../../../../states/useCharacterState";
import { useEntries } from "../../../../../../../hooks/Journal/useEntries";
import Button from "../../../../../../../common/components/Button";
import AddButton from "../../../../../../../../assets/svgs/AddButton.svg";
import CreateEntry from "./CreateEntry";

export default function EntriesList() {
  const [expandedIndex, setExpandedIndex] = React.useState<number | null>(null);
  const { token } = useUserState();
  const { character } = useCharacterState();
  const { entries, getEntriesByCharacter, setRefreshFlag } = useEntries(
    character?.id!,
    token!,
  );
  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const refreshEntries = async () => {
    console.log(
      "Do NOT forget to ask professor Andres about this hellish thing",
    );
    setRefreshFlag((prev) => !prev);
    await getEntriesByCharacter();
  };

  const closeModalHandler = () => {
    setModalVisible(false);
  };

  const renderItem = ({ item, index }: { item: any; index: number }) => (
    <ListItem.Accordion
      isExpanded={expandedIndex === index}
      onPress={() => handlePress(index)}
      icon={
        <Icon
          name={"chevron-down"}
          type={"material-community"}
          color={"#c29f41"}
        />
      }
      containerStyle={styles.accordionContainer}
      content={
        <>
          <ListItem.Content className="bg-themys-dune flex flex-row">
            <ListTitle title={item.title} />
          </ListItem.Content>
        </>
      }
    >
      <EntryContent
        content={item.content}
        id={item.id}
        refreshCallback={refreshEntries}
      />
    </ListItem.Accordion>
  );

  return (
    <>
      <Button.Rectangular onPress={() => setModalVisible(true)}>
        <AddButton width={60} height={60} />
      </Button.Rectangular>
      <FlatList
        data={entries}
        renderItem={renderItem}
        keyExtractor={(item) => item.id!.toString()}
        className={`mt-5 mb-20`}
      />
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModalHandler}
      >
        <CreateEntry
          closeModalCallback={closeModalHandler}
          refreshCallback={refreshEntries}
        />
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  accordionContainer: {
    backgroundColor: "#3B3634",
    borderRadius: 8,
    borderColor: "#cfbe86",
    borderWidth: 1,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
    height: 70,
    marginBottom: 20,
  },
});
