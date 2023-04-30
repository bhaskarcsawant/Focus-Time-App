import * as React from "react";
import { useState } from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

export const RoundedButton = ({ title, size = 50, onpress, data }) => {
  return (
    <TouchableOpacity
      style={styles(size).button}
      onPress={() => (data ? onpress([data, false]) : null)}
    >
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = (size, color) =>
  StyleSheet.create({
    button: {
      borderRadius: size / 2,
      borderColor: "black",
      borderWidth: 2,
      width: size,
      height: size,
      alignItems: "center",
      justifyContent: "center",
      fontSize: size / 1.5,
      fontWeight: 800,
    },
  });
