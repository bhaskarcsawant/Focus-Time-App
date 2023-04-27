import * as React from 'react';
import  {useState} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {Focus} from './src/features/focus/Focus'
import Constants from 'expo-constants';


export default function App() {

  const [focusSubject, setFocusSubject] = useState(null)
  return (
    <View style={styles.container}>
    {focusSubject ? null : <Focus />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
});
