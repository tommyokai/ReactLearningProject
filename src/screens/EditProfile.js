/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Button from '../components/Button';
import TextField from '../components/TextInput';

const App = () => {
  return (
    <View style={styles.screen}>
      <TextField title="First Name" />
      <TextField title="Last Name" />
      <TextField title="Region" />
      <TextField title="City" />
      <TextField title="Address Line 1" />
      <TextField title="Address Line 2" />
      {/* button prop */}
      <Button title="Save Changes" style={styles.btn} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
});

export default App;
