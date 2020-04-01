/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, StyleSheet, Text, TochableOpacity} from 'react-native';

import Button from '../components/Button';
import HistoryDetails from '../components/HistoryDetails';
import SearchBar from '../components/SearchBar';
import {TouchableOpacity} from 'react-native-gesture-handler';

const App = props => {
  return (
    <View style={styles.screen}>
      <View></View>

      <SearchBar
        title="Filter Transaction"
        pressTo={() => props.navigation.navigate('HistoryFilter')}
      />
      <View style={styles.historyInfo}>
        <Text style={styles.date}>2:00 PM 2/10/2018</Text>
        <TouchableOpacity activeOpacity={0.8}>
          <Text style={styles.clear}>Clear</Text>
        </TouchableOpacity>
      </View>
      <HistoryDetails
        title="Receive Money"
        amount="GHS20.00"
        from="Mark Tutu"
        date="02-03-2020"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  historyInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 15,
  },
  clear: {
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
    color: '#262626',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  date: {
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
    color: '#262626',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    opacity: 0.7,
  },
});

export default App;
