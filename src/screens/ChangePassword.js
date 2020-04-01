/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

import Button from '../components/Button';
import TextField from '../components/TextInput';

const App = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.textFieldContainer}>
        <TextField title="Old Password" />
      </View>
      <View style={styles.textFieldContainer}>
        <TextField title="New Password" />
      </View>
      <View style={styles.textFieldContainer}>
        <TextField title="Retype Password" />
      </View>
      {/* button prop */}
      <View style={styles.btn}>
        <Button title="Save Changes" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 15,
  },
  textFieldContainer: {
    marginVertical: 10,
  },
  btn: {
    marginVertical: 40,
  },
});

export default App;
