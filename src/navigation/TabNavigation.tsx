/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screens from '../Screens';
import FollowingScreen from '@screens/following/FollowingScreen';
import BrowseScreen from '@screens/browse/BrowseScreen';
import DiscoverScreen from '@screens/discover/DiscoverScreen';
import SearchScreen from '@screens/search/SearchScreen';
import { getText } from '../i18n/manageLocales';
import { Colors } from '../assets/Colors';
import { Text } from 'react-native';
import Fonts from '../assets/Fonts';
import FontSize from '../assets/FontSize';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Header from '@global-components/Header';
import SearchHeader from '@global-components/SearchHeader';

const Tab = createBottomTabNavigator();

const TABS = [
    {
        label: getText().tabs.following,
        name: Screens.Tabs.FollowingScreen,
        children: FollowingScreen,
        activeIcon: 'heart',
        header: <Header title={getText().tabs.following} />,
    },
    {
        label: getText().tabs.discover,
        name: Screens.Tabs.DiscoverScreen,
        children: DiscoverScreen,
        activeIcon: 'compass',
        header: <Header title={getText().tabs.discover} />,
    },
    {
        label: getText().tabs.browse,
        name: Screens.Tabs.BrowseScreen,
        children: BrowseScreen,
        activeIcon: 'layer-group',
        header: <Header title={getText().tabs.browse} />,
    },
    {
        label: getText().tabs.search,
        name: Screens.Tabs.SearchScreen,
        children: SearchScreen,
        activeIcon: 'search',
        header: <SearchHeader />,
    },
];


const TabNavigation = () => {
    return (
        <Tab.Navigator
            initialRouteName={Screens.Tabs.FollowingScreen}>
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

export default TabNavigation;
