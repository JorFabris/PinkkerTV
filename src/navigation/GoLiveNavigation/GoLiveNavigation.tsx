/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screens from '../../Screens';

import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Fonts from '@fonts';
import { getText } from '@getTexts';
import { Colors } from '@assets-colors';
import FontSize from '@fontSize';

const Tab = createBottomTabNavigator();

const TABS: any[] = [

];


const GoLiveNavigation = () => {
    return (
        <Tab.Navigator
            initialRouteName={Screens.Home.FollowingScreen}>
            {TABS.map((tab, i) => (
                <Tab.Screen
                    key={`TAB-${i}`}
                    name={tab.name}
                    component={tab.children}
                    initialParams={{ title: tab.label }}
                    options={{
                        tabBarActiveTintColor: Colors.mainColor,
                        tabBarInactiveBackgroundColor: Colors.screenColor,
                        tabBarActiveBackgroundColor: Colors.screenColor,
                        header: () => tab.header,
                        tabBarLabel: ({ color }) => (<Text style={{
                            color: color,
                            fontFamily: Fonts.MEDIUM,
                            fontSize: FontSize.fontTabHome,
                            marginBottom: 5,
                        }}>{tab.label}</Text>),
                        tabBarIcon: ({ color, focused }) => (
                            <Icon
                                color={color}
                                size={25}
                                solid={focused}
                                name={tab.activeIcon}
                            />
                        ),
                    }}
                />
            ))}

        </Tab.Navigator>
    );
};

export default GoLiveNavigation;
