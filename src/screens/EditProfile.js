/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
// component imports
import Button from '../components/Button';
import TextField from '../components/TextInput';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.screen}>
          {/* First name */}
          <View style={styles.textFieldContainer}>
            <TextField title="First Name" />
          </View>
          {/* Last Name */}
          <View style={styles.textFieldContainer}>
            <TextField title="Last Name" />
          </View>
          {/* Region */}
          <View style={styles.textFieldContainer}>
            <TextField title="Region" />
          </View>
          {/* City */}
          <View style={styles.textFieldContainer}>
            <TextField title="City" />
          </View>
          {/* Address Line 1 */}
          <View style={styles.textFieldContainer}>
            <TextField title="Address Line 1" />
          </View>
          {/* Adress Line 2 */}
          <View style={styles.textFieldContainer}>
            <TextField title="Address Line 2" />
          </View>
          {/* button prop */}
          <Button title="Save Changes" style={styles.btn} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  screen: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 15,
  },
  textFieldContainer: {marginVertical: 10},
});

export default App;
