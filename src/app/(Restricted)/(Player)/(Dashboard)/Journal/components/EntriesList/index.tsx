import { FlatList, StyleSheet } from "react-native";
import React from "react";
import { ListItem } from "@rneui/themed";
import { Icon } from "@rneui/base";
import ListTitle from "./ListTitle";
import EntryContent from "./EntryContent";
import { journalEntries } from "../../../../../../../mocks/MOCK_JOURNAL";

export default function EntriesList() {
  const [expandedIndex, setExpandedIndex] = React.useState<number | null>(null);

  const handlePress = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
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
      <EntryContent content={item.content} id={item.id} />
    </ListItem.Accordion>
  );

  return (
    <FlatList
      data={journalEntries}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      className={`mb-20`}
    />
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
