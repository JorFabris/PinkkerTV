
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigation from './TabNavigation';
import NotificationsScreen from '@screens/notifications/NotificationScreen';
import RegisterScreen from '@screens/register/RegisterScreen';
import LoginScreen from '@screens/login/LoginScreen';
import InboxScreen from '@screens/inbox/InboxScreen';
import Screens from '../Screens';

const Stack = createStackNavigator();

const StackNavigation = () => {

  return (
    <Stack.Navigator
      initialRouteName={Screens.Stack.LoginScreen}>
      <Stack.Screen options={{ headerShown: false }} name={Screens.Stack.LoginScreen} component={LoginScreen} />
      <Stack.Screen options={{ headerShown: false }} name={Screens.Stack.RegisterScreen} component={RegisterScreen} />
      <Stack.Screen options={{ headerShown: false }} name={Screens.Stack.Tabs} component={TabNavigation} />
      <Stack.Screen options={{ headerShown: false }} name={Screens.Stack.NotificationsScreen} component={NotificationsScreen} />
      <Stack.Screen name={Screens.Stack.InboxScreen} component={InboxScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
