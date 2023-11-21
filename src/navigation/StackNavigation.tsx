/* eslint-disable react/no-unstable-nested-components */

import React from 'react';
import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';
import WatchNavigation from './WatchNavigation/WatchNavigation';
import NotificationsScreen from '@screens/Watch/notifications/NotificationScreen';
import RegisterScreen from '@screens/register/RegisterScreen';
import LoginScreen from '@screens/login/LoginScreen';
import InboxScreen from '@screens/Watch/inbox/InboxScreen';
import Screens from '../Screens';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CustomHeader from '@global-components/CustomHeader/CustomHeader';
import { Colors } from '@assets-colors';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Fonts from '@fonts';
import FontSize from '@fontSize';
import { getText } from '@getTexts';
import GoLiveNavigation from './GoLiveNavigation/GoLiveNavigation';

const Stack = createStackNavigator();

const StackNavigation = () => {
  const navigation = useNavigation<StackNavigationProp<any, any>>();

  const InboxHeader = () => {
    return (
      <CustomHeader
        backgroundColor={Colors.componentsColor}
        startSlot={
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}>
            <Icon name="chevron-left" size={25} color={Colors.textColor} />
          </TouchableOpacity>
        }
        title={
          <Text
            style={{
              fontFamily: Fonts.BOLD,
              fontSize: FontSize.thirtyTwo,
              color: Colors.textColor,
              marginHorizontal: 15,
            }}>
            {getText().watch.inbox.title}
          </Text>
        }
      />
    );
  };


  const RegisterHeader = () => {
    return (
      <CustomHeader
        backgroundColor={Colors.componentsColor}
        startSlot={
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}>
            <Icon name="chevron-left" size={25} color={Colors.textColor} />
          </TouchableOpacity>
        }
        title={
          <Text
            style={{
              fontFamily: Fonts.BOLD,
              fontSize: FontSize.thirtyTwo,
              color: Colors.textColor,
              marginHorizontal: 15,
            }}>
            {getText().register.header}
          </Text>
        }
      />
    );
  };


  const NotificationsHeader = () => {
    return (
      <CustomHeader
        backgroundColor={Colors.componentsColor}
        startSlot={
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}>
            <Icon name="chevron-left" size={25} color={Colors.textColor} />
          </TouchableOpacity>
        }
        title={
          <Text
            style={{
              fontFamily: Fonts.BOLD,
              fontSize: FontSize.thirtyTwo,
              color: Colors.textColor,
              marginHorizontal: 15,
            }}>
            {getText().watch.notifications.title}
          </Text>
        }
      />
    );
  };

  return (
    <Stack.Navigator
      initialRouteName={Screens.Stack.LoginScreen}>
      <Stack.Screen options={{ headerShown: false }} name={Screens.Stack.LoginScreen} component={LoginScreen} />
      <Stack.Screen options={{ header: () => (<RegisterHeader />) }} name={Screens.Stack.RegisterScreen} component={RegisterScreen} />
      <Stack.Screen options={{ headerShown: false }} component={WatchNavigation} name={Screens.Stack.WatchNavigation} />
      <Stack.Screen options={{ header: () => (<NotificationsHeader />) }} name={Screens.Stack.NotificationsScreen} component={NotificationsScreen} />
      <Stack.Screen options={{
        header: () => (<InboxHeader />),
      }} name={Screens.Stack.InboxScreen} component={InboxScreen} />
      <Stack.Screen options={{ headerShown: false }} component={GoLiveNavigation} name={Screens.Stack.GoLiveNavigation} />
    </Stack.Navigator>
  );
};


const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    left: 15,
  },
});
export default StackNavigation;
