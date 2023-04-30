import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { FontSize, Padding } from "../utils/sizes";
import { useState, useEffect } from "react";

const MinToMilis = (min) => min * 1000 * 60;
const FormatTime = (time) => (time < 10 ? `0${time}` : time);

export const CountDown = ({ min, isPaused = true, onProgress, onEnd }) => {
  const interval = React.useRef(null);
  const [milis, setMilis] = useState(MinToMilis(min));
  const Countdown = () => {
    setMilis((time) => {
      if (time === 0) {
        clearInterval(interval.current);
        onEnd();
        return time;
      }
      let timeLeft = time - 1000;
      onProgress(timeLeft / MinToMilis(min));
      return timeLeft;
    });
  };

  useEffect(() => {
    setMilis(MinToMilis(min));
  }, [min]);

  useEffect(() => {
    if (isPaused) {
      if (interval.current) clearInterval(interval.current);
      return;
    }
    interval.current = setInterval(Countdown, 1000);
    return () => clearInterval(interval.current);
  }, [isPaused]);

  const minute = Math.floor(milis / 1000 / 60) % 60;
  const sec = Math.floor(milis / 1000) % 60;
  return (
    <View style={styles.container}>
      <Text style={styles.timer}>
        {FormatTime(minute)}:{FormatTime(sec)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.6,
    padding: Padding.lg,
    alignItems: "center",
  },
  timer: {
    fontSize: FontSize.xxl,
    fontWeight: "600",
    color: "red",
    marginTop: 50,
  },
});
