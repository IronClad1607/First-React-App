import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

const TextInputScreen = () => {
  const [name, setName] = useState("");

  return (
    <View>
      <Text>Enter Password</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newValue) => {
          setName(newValue);
        }}
      />
      {name.length < 5 ? 
        <Text>Password should be more than 5 characters</Text>
       : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default TextInputScreen;
