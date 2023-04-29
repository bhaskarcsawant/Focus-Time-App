import React, { useState } from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { FontSize, Padding } from "../../utils/sizes";
import { CountDown } from "../../components/CountDown";

export const Timer = ({ subject }) => {
  const [isStarted, setIsStarted] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Focusing on :</Text>
      <Text style={styles.subject}>{subject}</Text>
      <CountDown min={20} isPaused={!isStarted} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => setIsStarted(!isStarted)}
      >
        <Text style={styles.StartTitle}>{isStarted ? "Stop" : "Start"}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Padding.lg,
    alignItems: "center",
  },
  title: {
    fontSize: FontSize.lg,
    fontWeight: "400",
  },
  StartTitle: {
    fontSize: FontSize.xl,
    fontWeight: "600",
  },
  subject: {
    fontSize: FontSize.xl,
    fontWeight: "500",
    color: "green",
  },
  button: {
    borderRadius: 100,
    borderColor: "black",
    borderWidth: 3,
    width: 200,
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 120,
  },
});
