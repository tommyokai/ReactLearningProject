import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
const SearchBar = props => {
  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.textContainer}>{props.title}</Text>
      <View style={styles.filterContainer}>
        <View style={styles.searchbarContainer}>
          <Icon
            name="search1"
            size={20}
            color="#262626"
            style={styles.searchIcon}
          />
          <TextInput style={styles.searchbar} />
        </View>
        <TouchableOpacity activeOpacity={0.8} onPress={props.pressTo}>
          <Icon name="filter" size={30} color="#262626" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fieldContainer: {
    paddingVertical: 15,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    fontSize: 16,
    fontFamily: 'MontserratBold',
    color: '#262626',
    marginBottom: 10,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  searchbarContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#262626',
    borderWidth: 1,
    height: 40,
    borderRadius: 5,
    width: '85%',
  },
  searchbar: {
    width: '85%',
    fontSize: 16,
    fontFamily: 'MontserratBold',
    color: '#262626',
  },
  searchIcon: {
    marginRight: 5,
  },
});

export default SearchBar;
