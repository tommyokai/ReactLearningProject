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
    marginHorizontal: 20,
    height: 50,
  },
  textContainer: {
    color: '#262626',
    fontFamily: 'Montserrat-Regular',
    paddingVertical: 7,
    fontSize: 12,
  },
  mainField: {
    backgroundColor: '#FAFAFA',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    fontFamily: 'Montserrat-Regular',
  },
});

export default TextField;
