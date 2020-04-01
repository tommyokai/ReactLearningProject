/* eslint-disable prettier/prettier */
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import AccountSettings from '../src/screens/AccountSettings';
import ChangePassword from '../src/screens/ChangePassword';
import EditProfile from '../src/screens/EditProfile';
import TransactionHistory from '../src/screens/TransactionHistory';
import HistoryFilter from '../src/screens/HistoryFilter';

const AccountNavigator = {
  Account: {
    screen: AccountSettings,
    navigationOptions: {
      title: 'Account Settings',
    },
  },
  EditProfile: {
    screen: EditProfile,
    navigationOptions: {
      title: 'Edit Profile',
    },
  },
  Password: {
    screen: ChangePassword,
    navigationOptions: {
      title: 'Change Password',
    },
  },
  TransactionHistory: {
    screen: TransactionHistory,
    navigationOptions: {
      title: 'Transaction History',
    },
  },
  HistoryFilter: {
    screen: HistoryFilter,
    navigationOptions: {
      title: 'Transaction History',
    },
  },
};

const AccountSettingsNavigator = createStackNavigator(AccountNavigator, {
  initialRouteName: 'Account',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#fff',
      borderBottomWidth: 1,
      borderBottomColor: '#262626',
      shadowOpacity: 0, // This is for ios
      elevation: 0, // This is for android
    },
    headerTintColor: '#000',
    headerTitleStyle: {
      fontWeight: 'bold',
      color: '#262626',
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
});

export default createAppContainer(AccountSettingsNavigator);
