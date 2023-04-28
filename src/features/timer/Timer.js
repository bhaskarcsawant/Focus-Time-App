import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { FontSize, Padding } from "../../utils/sizes";
import { CountDown } from "../../components/CountDown";

export const Timer = ({ subject }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Focusing on :</Text>
      <Text style={styles.subject}>{subject}</Text>
      <CountDown min={"20"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    padding: Padding.lg,
    alignItems: "center",
  },
  title: {
    fontSize: FontSize.lg,
    fontWeight: "400",
  },
  subject: {
    fontSize: FontSize.xl,
    fontWeight: "500",
    color: "green",
  },
  timer: {
    fontSize: FontSize.xxl,
    fontWeight: "600",
    color: "red",
    marginTop: 50,
  },
});
