/* eslint-disable prettier/prettier */
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import AccountSettings from '../src/screens/AccountSettings';
import ChangePassword from '../src/screens/ChangePassword';
import EditProfile from '../src/screens/EditProfile';
import TransactionHistory from '../src/screens/TransactionHistory';

const AccountNavigator = {
  Account: {
    screen: AccountSettings,
  },
  EditProfile: {
    screen: EditProfile,
  },
  Password: {
    screen: ChangePassword,
  },
  TransactionHistory: {
    screen: TransactionHistory,
  },
};

const AccountSettingsNavigator = createStackNavigator(AccountNavigator, {
  initialRouteName: 'Account',
});

export default createAppContainer(AccountSettingsNavigator);
