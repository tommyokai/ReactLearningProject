import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

const HistoryDetails = props => {
  return (
    <View style={styles.historydetailsContainer}>
      <View style={styles.detailsBold}>
        <Text>{props.title}</Text>
        <Text>{props.amount}</Text>
      </View>
      <View style={styles.detailslight}>
        <Text>From: {props.from}</Text>
        <Text>{props.date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  historydetailsContainer: {
    borderColor: '#262626',
    borderWidth: 1,
    borderLeftWidth: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    height: 70,
  },
  detailsBold: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: 'space-between',
    fontFamily: 'Montserrat-Bold',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#262626',
  },
  detailslight: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    fontFamily: 'Montserrat-Regular',
    fontWeight: 'bold',
    fontSize: 12,
    color: '#262626',
  },
});

export default HistoryDetails;
