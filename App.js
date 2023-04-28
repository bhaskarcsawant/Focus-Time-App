import * as React from "react";
import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Focus } from "./src/features/focus/Focus";
import Constants from "expo-constants";
import { Timer } from "./src/features/timer/Timer";

export default function App() {
  const [focusSubject, setFocusSubject] = useState("Garding");
  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer subject={focusSubject} />
      ) : (
        <Focus addSubject={setFocusSubject} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    alignItems: "center",
  },
});
