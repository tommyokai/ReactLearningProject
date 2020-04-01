/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Button from '../components/Button';
import ProfileAvatar from '../components/Avatar';
import Link from '../components/links';

const AccountSettings = props => {
  return (
    <View style={styles.screen}>
      {/* Icon*/}
      <ProfileAvatar name="Mark Tutu" />
      {/* links  */}
      <View style={styles.sectionContainer}>
        {/* Edit Profile */}
        <View style={styles.topLink}>
          <Link
            name="Edit Profile"
            pressTo={() => props.navigation.navigate('EditProfile')}
          />
        </View>
        {/* Change Password */}
        <View style={styles.bottomLink}>
          <Link
            name="Change Password"
            pressTo={() => props.navigation.navigate('Password')}
          />
        </View>
        {/* Transacton History */}
        <View style={styles.bottomLink}>
          <Link
            name="Transaction History"
            pressTo={() => props.navigation.navigate('TransactionHistory')}
          />
        </View>
      </View>
      {/* button prop */}
      <Button title="Sign Out" style={styles.btn} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },

  sectionContainer: {
    marginTop: 32,
    marginHorizontal: 35,
  },
  topLink: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#262626',
  },
  bottomLink: {
    borderBottomWidth: 1,
    borderColor: '#262626',
  },
  profileText: {
    fontFamily: 'Montserrat-Bold',
  },
});

export default AccountSettings;
