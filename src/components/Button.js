/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Button = props => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.buttonContainer}>
      <Text style={styles.buttonTitle}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#262626',
    marginVertical: 30,
    marginHorizontal: 40,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTitle: {
    color: 'white',
    textAlign: 'center',
    paddingVertical: 10,
    textTransform: 'uppercase',
    fontFamily: 'Montserrat-Medium.ttf',
    fontSize: 16,
  },
});

export default Button;
