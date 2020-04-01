/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Filter = props => {
  return (
    <View style={styles.filterContainer}>
      <Text style={styles.fromDate}>{props.dateTitle}</Text>
      <View style={styles.datePickerContainer}>
        <TextInput
          placeholder="02/03/2020"
          placeholderTextColor="#262626"
          style={styles.datePickerField}
        />
        {/* <Text style={styles.dateContainer}>02/03/2020</Text> */}
        <Icon
          name="calendar"
          size={20}
          color="#262626"
          style={styles.calendarIcon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fromDate: {
    fontSize: 16,
    marginVertical: 10,
    textTransform: 'uppercase',
    fontWeight: '500',
    fontFamily: 'Montserrat-Bold',
  },
  datePickerContainer: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    alignItems: 'center',
    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.21,
    shadowRadius: 2,
    elevation: 4,
    paddingHorizontal: 10,
  },
  datePickerField: {
    width: '85%',
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
    color: '#262626',
  },
  calendarIcon: {
    marginRight: 5,
  },
});

export default Filter;
