import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {create} from 'react-test-renderer';

const ProfileAvatar = props => {
  return (
    <View>
      <TouchableOpacity activeOpacity={0.8}>
        <View style={styles.iconContainer}>
          <Icon name="user" size={90} color="#262626" style={styles.icon} />
        </View>
      </TouchableOpacity>
      <View>
        <Text style={styles.iconText}>{props.name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  icon: {
    borderRadius: 250,
    borderWidth: 1,
    borderColor: '#262626',
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#FAFAFA',
  },
  iconText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 12,
    marginTop: 10,
    textAlign: 'center',
    justifyContent: 'center',
  },
});

export default ProfileAvatar;
