import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const AccountSettingsMenu = props => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.menuContainer}
      pressTo={() => props.navigation.navigate('EditProfile')}>
      <Text style={styles.menuText}>{props.name}</Text>
      <Icon
        name="keyboard-arrow-right"
        size={20}
        color="#262626"
        style={styles.arrow}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderColor: '#262626',
    borderBottomWidth: 1,
  },
  menuText: {
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
    color: '#262626',
  },
});

export default AccountSettingsMenu;
