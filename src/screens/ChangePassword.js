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
      <TextField title="Old Password" />
      <TextField title="New Password" />
      <TextField title="Retype Password" />
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
  },
  btn: {
    marginVertical: 60,
  },
});

export default App;
