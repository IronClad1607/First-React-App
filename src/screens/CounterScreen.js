import React, { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Button
        title="Increase"
        styles={styles.button}
        onPress={() => {
          setCounter(counter + 1);
        }}
      />
      <View style={styles.space} />
      <Button
        title="Decrease"
        style={styles.button}
        onPress={() => {
          setCounter(counter - 1);
        }}
      />
      <View style={styles.space} />
      <Text>Current Count:{counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginBottom: 20,
    padding: 30,
  },
  space: {
    width: 20,
    height: 20,
  },
});

export default CounterScreen;
