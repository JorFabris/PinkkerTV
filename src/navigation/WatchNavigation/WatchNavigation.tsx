/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screens from '../../Screens';
import FollowingScreen from '@screens/Watch/following/FollowingScreen';
import BrowseScreen from '@screens/Watch/explore/ExploreScreen';
import DiscoverScreen from '@screens/Watch/discover/DiscoverScreen';
import SearchScreen from '@screens/Watch/search/SearchScreen';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Header from '@navigation/WatchNavigation/components/Header';
import SearchHeader from '@navigation/WatchNavigation/components/SearchHeader';
import Fonts from '@fonts';
import { getText } from '@getTexts';
import { Colors } from '@assets-colors';
import FontSize from '@fontSize';

const Tab = createBottomTabNavigator();

const TABS = [
    {
        label: getText().watch.tabs.following,
        name: Screens.Watch.FollowingScreen,
        children: FollowingScreen,
        activeIcon: 'heart',
        header: <Header title={getText().watch.tabs.following} />,
    },
    {
        label: getText().watch.tabs.discover,
        name: Screens.Watch.DiscoverScreen,
        children: DiscoverScreen,
        activeIcon: 'compass',
        header: <Header title={getText().watch.tabs.discover} />,
    },
    {
        label: getText().watch.tabs.browse,
        name: Screens.Watch.BrowseScreen,
        children: BrowseScreen,
        activeIcon: 'layer-group',
        header: <Header title={getText().watch.tabs.browse} />,
    },
    {
        label: getText().watch.tabs.search,
        name: Screens.Watch.SearchScreen,
        children: SearchScreen,
        activeIcon: 'search',
        header: <SearchHeader />,
    },
];


const WatchNavigation = () => {
    return (
        <Tab.Navigator
            initialRouteName={Screens.Watch.FollowingScreen}>
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

export default WatchNavigation;
