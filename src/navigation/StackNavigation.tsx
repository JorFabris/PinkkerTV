import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../ui/screens/login/LoginScreen';
import RegisterScreen from '../ui/screens/register/RegisterScreen';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="LoginScreen">
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
