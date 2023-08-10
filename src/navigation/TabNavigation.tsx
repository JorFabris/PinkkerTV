import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../ui/screens/home/HomeScreen';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName="HomeScreen">
            <Tab.Screen name="HomeScreen" component={HomeScreen} />

        </Tab.Navigator>
    );
};

export default TabNavigation;
