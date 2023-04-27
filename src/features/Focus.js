import * as React from 'react';
import  {useState} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {TextInput} from 'react-native-paper';




export const Focus = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What do you want to focus on?</Text>
      <TextInput style={styles.inputField} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
  },
  title:{
    fontSize:15,
    fontWeight:700,
  },
  inputField : {
    marginTop:20,
  }
});
