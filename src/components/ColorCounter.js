import React from "react";
import { View, Button, StyleSheet, Text } from "react-native";

const ColorCounter = (props) => {
  return (
    <View>
      <Text>{props.color}</Text>
      <Button title={`Increase ${props.color}`} />
      <Button title={`Decrease ${props.color}`} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCounter;
