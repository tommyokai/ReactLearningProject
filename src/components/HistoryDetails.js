import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

const HistoryDetails = props => {
  return (
    <View style={styles.historydetailsContainer}>
      <View style={styles.detailsBoldContainer}>
        <Text style={styles.detailsBold}>{props.title}</Text>
        <Text style={styles.detailsBold}>{props.amount}</Text>
      </View>
      <View style={styles.detailslightContainer}>
        <Text style={styles.detailslight}>From: {props.from}</Text>
        <Text style={styles.detailslight}>{props.date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  historydetailsContainer: {
    backgroundColor: '#fff',
    borderColor: '#262626',
    borderWidth: 0.8,
    borderLeftWidth: 10,
    marginVertical: 10,
    height: 70,
    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.21,
    shadowRadius: 2,
    elevation: 4,
  },
  detailsBoldContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailsBold: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontFamily: 'Montserrat-Bold',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#262626',
  },
  detailslightContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailslight: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    fontFamily: 'Montserrat-Regular',
    fontWeight: 'normal',
    fontSize: 12,
    color: '#262626',
  },
});

export default HistoryDetails;
