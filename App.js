import * as React from "react";
import { useState, useEffect } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  AsyncStorage,
} from "react-native";
import { Focus } from "./src/features/focus/Focus";
import Constants from "expo-constants";
import { Timer } from "./src/features/timer/Timer";

export default function App() {
  const [focusSubject, setFocusSubject] = useState([]);
  const [focusHistory, setfocusHistory] = useState([]);
  useEffect(() => {
    if (focusSubject) {
      const item = focusHistory.find((arr) => arr.includes(focusSubject[0]));
      if (!item) {
        setfocusHistory([...focusHistory, focusSubject]);
      }
    }
  }, [focusSubject]);
  const resetFocus = () => {
    const item = focusHistory.indexOf(
      focusHistory.find((arr) => arr.includes(focusSubject[0]))
    );
    focusHistory[item][1] = true;
    setFocusSubject([]);
  };
  const clearFocus = () => {
    setFocusSubject([]);
  };
  const saveFocusHistory = async () => {
    try {
      await AsyncStorage.setItem("focusHistory", JSON.stringify(focusHistory));
    } catch (e) {
      console.log(e);
    }
  };
  const loadFocusHistory = async () => {
    try {
      let history = await AsyncStorage.getItem("focusHistory");
      if (history && JSON.parse(history).length) {
        setfocusHistory(JSON.parse(history));
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    loadFocusHistory();
  }, []);

  useEffect(() => {
    saveFocusHistory();
  }, [focusHistory]);
  return (
    <View style={styles.container}>
      {focusSubject.length ? (
        <Timer
          subject={focusSubject}
          resetFocus={resetFocus}
          clearFocus={clearFocus}
        />
      ) : (
        <>
          <Focus addSubject={setFocusSubject} />
          <View style={styles.secContainer}>
            <Text style={styles.secTitle}>What we have focused on:</Text>
            {focusHistory
              ? focusHistory
                  .filter((item) => item.length !== 0)
                  .map((item) =>
                    item[1] ? (
                      <Text style={styles.itemTitle}>{item[0]}</Text>
                    ) : (
                      <Text
                        style={styles.itemFalseTitle}
                        onPress={() => setFocusSubject(item)}
                      >
                        {item[0]}
                      </Text>
                    )
                  )
              : null}
          </View>
          <TouchableOpacity
            style={styles.ExitButton}
            onPress={() => setfocusHistory([])}
          >
            <Text style={styles.clearTitle}>Clear</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "",
    alignItems: "center",
  },
  secContainer: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "",
    alignItems: "center",
    position: "absolute",
    top: 260,
  },
  secTitle: {
    fontSize: 20,
  },
  clearTitle: {
    fontSize: 20,
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: "800",
    marginTop: 4,
    color: "green",
  },
  itemFalseTitle: {
    fontSize: 20,
    fontWeight: "800",
    marginTop: 4,
    color: "red",
  },
  ExitButton: {
    borderRadius: 50,
    borderColor: "black",
    borderWidth: 3,
    width: 100,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 50,
  },
});
