/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Button from '../components/Button';
import ProfileAvatar from '../components/Avatar';
import Link from '../components/links';

const AccountSettings = props => {
  return (
    <View style={styles.screen}>
      {/* Icon*/}
      <ProfileAvatar />
      {/* links  */}
      <View style={styles.sectionContainer}>
        {/* <TouchableOpacity
        //   activeOpacity={0.8}
        //   style={styles.editprofileContainer}
        //   onPress={() => {
        //     props.navigation.navigate('EditProfile');
        //   }}>
        //   <Text style={styles.profileText}>Edit Profile</Text>
        //   <Icon
        //     name="keyboard-arrow-right"
        //     size={20}
        //     color="#262626"
        //     style={styles.arrow}
        //   />
        // </TouchableOpacity>*/}
        <Link
          name="Edit Profile"
          pressTo={() => props.navigation.navigate('EditProfile')}
        />

        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.profileContainer}
          onPress={() => {
            props.navigation.navigate('Password');
          }}>
          <Text style={styles.profileText}>Change Password</Text>
          <Icon
            name="keyboard-arrow-right"
            size={20}
            color="#262626"
            style={styles.arrow}
          />
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.tranhisContainer}
          onPress={() => {
            props.navigation.navigate('TransactionHistory');
          }}>
          <Text style={styles.profileText}>Transaction History</Text>
          <Icon
            name="keyboard-arrow-right"
            size={20}
            color="#262626"
            style={styles.arrow}
          />
        </TouchableOpacity>
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
    flexGrow: 1,
  },
  editprofileContainer: {
    borderTopWidth: 1,
    borderColor: '#262626',
    paddingVertical: 15,
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tranhisContainer: {
    fontFamily: 'Montserrat-Bold',
    borderBottomWidth: 1,
    borderColor: '#262626',
    paddingVertical: 15,
    fontSize: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  profileContainer: {
    fontFamily: 'Montserrat-Bold',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#262626',
    paddingVertical: 15,
    fontSize: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profileText: {
    fontFamily: 'Montserrat-Bold',
  },
});

export default AccountSettings;
