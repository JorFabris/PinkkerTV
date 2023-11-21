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
import HomeScreen from '@screens/GoLive/HomeScreen';
import ContentScreen from '@screens/GoLive/ContentScreen';
import AnalitycsScreen from '@screens/GoLive/AnalitycsScreen';
import Header from './components/Header';

const Tab = createBottomTabNavigator();

const TABS = [
    {
        label: getText().goLive.home.title,
        name: Screens.GoLive.HomeScreen,
        children: HomeScreen,
        activeIcon: 'home',
        header: <Header title={getText().goLive.tabs.home} />,
    },
    {
        label: getText().goLive.tabs.content,
        name: Screens.GoLive.ContentScreen,
        children: ContentScreen,
        activeIcon: 'film',
        header: <Header title={getText().goLive.tabs.content} />,
    },
    {
        label: getText().goLive.tabs.analitycs,
        name: Screens.GoLive.AnalitycsScreen,
        children: AnalitycsScreen,
        activeIcon: 'chart-bar',
        header: <Header title={getText().goLive.tabs.analitycs} />,
    },
];


const GoLiveNavigation = () => {
    return (
        <Tab.Navigator
            initialRouteName={Screens.GoLive.HomeScreen}>
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
