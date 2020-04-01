import React, {Component} from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';

const TextField = props => {
  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.textContainer}>{props.title}</Text>
      <TextInput style={styles.mainField} />
    </View>
  );
};

const styles = StyleSheet.create({
  fieldContainer: {
    marginVertical: 10,
    height: 40,
  },
  textContainer: {
    color: '#262626',
    fontFamily: 'Montserrat-Regular',
    paddingVertical: 7,
    fontSize: 14,
  },
  mainField: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#262626',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    opacity: 0.3,
  },
});

export default TextField;
