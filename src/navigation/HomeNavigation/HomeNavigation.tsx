/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screens from '../../Screens';
import FollowingScreen from '@screens/following/FollowingScreen';
import BrowseScreen from '@screens/explore/ExploreScreen';
import DiscoverScreen from '@screens/discover/DiscoverScreen';
import SearchScreen from '@screens/search/SearchScreen';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Header from '@navigation/HomeNavigation/components/Header';
import SearchHeader from '@navigation/HomeNavigation/components/SearchHeader';
import Fonts from '@fonts';
import { getText } from '@getTexts';
import { Colors } from '@assets-colors';
import FontSize from '@fontSize';

const Tab = createBottomTabNavigator();

const TABS = [
    {
        label: getText().tabs.following,
        name: Screens.Home.FollowingScreen,
        children: FollowingScreen,
        activeIcon: 'heart',
        header: <Header title={getText().tabs.following} />,
    },
    {
        label: getText().tabs.discover,
        name: Screens.Home.DiscoverScreen,
        children: DiscoverScreen,
        activeIcon: 'compass',
        header: <Header title={getText().tabs.discover} />,
    },
    {
        label: getText().tabs.browse,
        name: Screens.Home.BrowseScreen,
        children: BrowseScreen,
        activeIcon: 'layer-group',
        header: <Header title={getText().tabs.browse} />,
    },
    {
        label: getText().tabs.search,
        name: Screens.Home.SearchScreen,
        children: SearchScreen,
        activeIcon: 'search',
        header: <SearchHeader />,
    },
];


const HomeNavigation = () => {
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

export default HomeNavigation;
