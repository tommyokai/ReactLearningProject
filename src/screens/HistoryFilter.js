/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Slider from '@react-native-community/slider';

import Button from '../components/Button';
import Filter from '../components/Filter';

const HistoryFilter = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.filterContainer}>
        <Text style={styles.filterText}>Filter</Text>
        <Filter dateTitle="From Date" />
        <Filter dateTitle="To Date" />
        <View>
          <Text style={styles.sliderHeader}>Amount of Money</Text>
          <Slider
            style={{width: '100%', height: 50}}
            minimumValue={10}
            maximumValue={1000}
            minimumTrackTintColor="#262626"
            maximumTrackTintColor="#000000"
          />
        </View>
      </View>
      {/* button prop */}
      <Button title="Apply" style={styles.btn} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingHorizontal: 25,
  },

  filterContainer: {
    marginTop: 10,
  },
  filterText: {
    fontSize: 50,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    opacity: 0.7,
    marginVertical: 20,
  },
  sliderHeader: {
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontFamily: 'Montserrat-Bold',
    opacity: 0.7,
    marginVertical: 20,
  },
});

export default HistoryFilter;
