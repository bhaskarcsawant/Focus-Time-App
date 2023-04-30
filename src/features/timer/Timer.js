import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Vibration,
  Platform,
} from "react-native";
import { FontSize, Padding } from "../../utils/sizes";
import { CountDown } from "../../components/CountDown";
import { ProgressBar } from "react-native-paper";
import { useKeepAwake } from "expo-keep-awake";

export const Timer = ({ subject, resetFocus, clearFocus }) => {
  useKeepAwake();
  const [isStarted, setIsStarted] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [timerCount, setTimerCount] = useState(0.1);
  const [progress, setProgress] = useState(1);
  const changeTime = (min) => {
    setTimerCount(min);
  };
  const onProgress = (prog) => {
    setProgress(prog);
  };
  const vibrate = () => {
    if (Platform.OS === "ios") {
      const interval = setInterval(() => Vibration.vibrate(), 1000);
      setTimeout(() => clearInterval(interval), 10000);
    } else {
      Vibration.vibrate("10s");
    }
  };
  const onEnd = () => {
    vibrate();
    setTimerCount(1);
    setProgress(1);
    setIsStarted(false);
    resetFocus();
  };
  useEffect(() => {
    if (isStarted) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [isStarted]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Focusing on :</Text>
      <Text style={styles.subject}>{subject[0]}</Text>
      <CountDown
        min={timerCount}
        isPaused={!isStarted}
        onProgress={onProgress}
        onEnd={onEnd}
      />
      <ProgressBar
        progress={progress}
        color="green"
        style={{ hieight: 20, width: 400 }}
      />
      <View style={styles.minibtContainer}>
        <TouchableOpacity
          style={disabled ? styles.MiniButtonOff : styles.MiniButton}
          disabled={disabled}
          onPress={() => changeTime(10)}
        >
          <Text style={styles.StartTitle}>10</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={disabled ? styles.MiniButtonOff : styles.MiniButton}
          disabled={disabled}
          onPress={() => changeTime(15)}
        >
          <Text style={styles.StartTitle}>15</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={disabled ? styles.MiniButtonOff : styles.MiniButton}
          disabled={disabled}
          onPress={() => changeTime(20)}
        >
          <Text style={styles.StartTitle}>20</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setIsStarted(!isStarted)}
      >
        <Text style={styles.StartTitle}>{isStarted ? "Stop" : "Start"}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.ExitButton} onPress={() => clearFocus()}>
        <Text style={styles.StartTitle}>Clear</Text>
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
  minibtContainer: {
    flex: 0.25,
    alignItems: "center",
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center",
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
    marginTop: 50,
  },
  MiniButton: {
    borderRadius: 50,
    borderColor: "black",
    borderWidth: 3,
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
    backgroundColor: "#b8b6b2",
    // marginTop:120,
  },
  MiniButtonOff: {
    borderRadius: 50,
    borderColor: "black",
    borderWidth: 3,
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
    backgroundColor: "#e8e7e6",
    opacity: 0.5,
    // marginTop:120,
  },
  ExitButton: {
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 3,
    width: 100,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 20,
    left: 50,
  },
});
