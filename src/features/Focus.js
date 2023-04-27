import * as React from "react";
import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { RoundedButton } from "../../components/RoundedButton";

export const Focus = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>What do you want to focus on?</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputField} />
        <RoundedButton title={"+"} size={50} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  inputContainer: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: 700,
  },
  inputField: {
    borderWidth: 2,
  },
});
