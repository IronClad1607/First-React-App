import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Ishaan", age: 21 },
    { name: "Sidhi", age: 22 },
    { name: "Satvik", age: 22 },
    { name: "Vishant", age: 21 },
    { name: "Sargam", age: 22 },
    { name: "JJ", age: 21 },
    { name: "Maddy", age: 21 },
    { name: "Vibhuti", age: 21 },
  ];

  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.heading}>
            {item.name} - Age {item.age}
          </Text>
        );
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
