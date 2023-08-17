import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FollowingScreen from '../ui/screens/following/FollowingScreen';
import DiscoverScreen from '../ui/screens/discover/DiscoverScreen';
import BrowseScreen from '../ui/screens/browse/BrowseScreen';
import SearchScreen from '../ui/screens/search/SearchScreen';
import { getText } from '../i18n/manageLocales';
import { Colors } from '../assets/Colors';
import { Text } from 'react-native';
import Fonts from '../assets/Fonts';
import FontSize from '../assets/FontSize';
import Icon from 'react-native-vector-icons/FontAwesome5';


const Tab = createBottomTabNavigator();


const TABS = [
    {
        label: getText().tabs.following,
        name: "FollowingScreen",
        children: FollowingScreen,
        activeIcon: 'heart',
    },
    {
        label: getText().tabs.discover,
        name: "DiscoverScreen",
        children: DiscoverScreen,
        activeIcon: 'compass',
    },
    {
        label: getText().tabs.browse,
        name: "BrowseScreen",
        children: BrowseScreen,
        activeIcon: 'layer-group',
    },
    {
        label: getText().tabs.search,
        name: "SearchScreen",
        children: SearchScreen,
        activeIcon: 'search',
    }
]

const TabNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName="FollowingScreen">
            {TABS.map(tab => (
                <Tab.Screen
                    name={tab.name}
                    component={tab.children}

                    options={{
                        tabBarActiveTintColor: Colors.mainColor,
                        tabBarInactiveBackgroundColor: Colors.screenColor,
                        tabBarActiveBackgroundColor: Colors.screenColor,
                        tabBarLabel: ({ color, focused }) => (<Text style={{
                            color: color,
                            fontFamily: Fonts.MEDIUM,
                            fontSize: FontSize.fontTabHome,
                            marginBottom: 5
                        }}>{tab.label}</Text>),
                        tabBarIcon: ({ color, focused }) => (
                            <Icon
                                color={color}
                                size={25}
                                solid={focused}
                                name={tab.activeIcon}
                            />
                        )
                    }}
                />
            ))}

        </Tab.Navigator>
    );
};

export default TabNavigation;
