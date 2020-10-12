import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1", age: 21 },
    { name: "Friend #2", age: 22 },
    { name: "Friend #3", age: 22 },
    { name: "Friend #4", age: 21 },
    { name: "Friend #5", age: 22 },
    { name: "Friend #6", age: 21 },
    { name: "Friend #7", age: 21 },
    { name: "Friend #8", age: 21 },
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
