import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const Link = props => {
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.menuContainer}
        onPress={props.pressTo}>
        <Text style={styles.menuText}>{props.name}</Text>
        <Icon
          name="keyboard-arrow-right"
          size={20}
          color="#262626"
          style={styles.arrow}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#262626',
  },
  menuText: {
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
    color: '#262626',
  },
});

export default Link;
