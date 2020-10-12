import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Ishaan" },
    { name: "Sidhi" },
    { name: "Satvik" },
    { name: "Vishant" },
    { name: "Sargam" },
    { name: "JJ" },
    { name: "Maddy" },
    { name: "Vibhuti" },
  ];

  return (
    <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return <Text style={styles.heading}>{item.name}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 15,
    marginVertical: 50,
    marginEnd: 10,
  },
});

export default ListScreen;
