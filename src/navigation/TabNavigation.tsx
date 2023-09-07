import React from 'react';
import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FollowingScreen from '../ui/screens/following/FollowingScreen';
import DiscoverScreen from '../ui/screens/discover/DiscoverScreen';
import BrowseScreen from '../ui/screens/browse/BrowseScreen';
import SearchScreen from '../ui/screens/search/SearchScreen';
import { getText } from '../i18n/manageLocales';
import { Colors } from '../assets/Colors';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import Fonts from '../assets/Fonts';
import FontSize from '../assets/FontSize';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconMaterialDesign from 'react-native-vector-icons/MaterialCommunityIcons';
import { View } from 'react-native';
import { ParamListBase, useNavigation } from '@react-navigation/native';


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

const Header = ({ title }: { title: string }) => {
    return (
        <View style={{ backgroundColor: Colors.componentsColor }}>
            <SafeAreaView>
                <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 10, }}>
                        <TouchableOpacity
                            activeOpacity={0.71}
                            style={[styles.btnIcon, { backgroundColor: Colors.mainColor, }]}
                        >
                            <Icon name='user' color={Colors.textColor} size={20} />
                        </TouchableOpacity>
                        <View style={{ flex: 1 }} />
                        <TouchableOpacity
                            activeOpacity={0.71}
                            style={styles.btnIcon}
                        >
                            <Icon name='comments' color={Colors.textColor} size={20} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.71}
                            style={styles.btnIcon}
                        >
                            <Icon name='inbox' color={Colors.textColor} size={20} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.71}
                            style={styles.btnTurnOn}
                        >
                            <IconMaterialDesign name='broadcast' color={Colors.textColor} size={20} />
                            <Text style={styles.textTurnOn}>{getText().home.turnOn}</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{ margin: 10, fontFamily: Fonts.BLACK, color: Colors.textColor, fontSize: FontSize.thirtyTwo }}>
                        {title}
                    </Text>
                </View>
            </SafeAreaView>
        </View>
    )
}

const SearchHeader = () => {
    const navigation = useNavigation();
    return (
        <View style={{ backgroundColor: Colors.componentsColor }}>
            <SafeAreaView>
                <View style={{ flexDirection: 'row', padding: 15, alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name='chevron-left' size={20} color={Colors.textColor} />
                    </TouchableOpacity>

                    <TextInput
                        placeholder={getText().search.placeholder}
                        placeholderTextColor={Colors.placeholderText}
                        style={styles.searchInput}
                    />

                </View>

            </SafeAreaView>

        </View>
    )
}


const TabNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: true,
                header: ({ route }) => {

                    if (route.name !== "SearchScreen") {
                        return (<Header title={route?.params?.title} />)
                    }
                    return (<SearchHeader />)
                }
            }
            }
            initialRouteName="FollowingScreen">
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

const styles = StyleSheet.create({
    btnIcon: {
        padding: 9,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25
    },
    btnTurnOn: {
        backgroundColor: Colors.white_40,
        padding: 6,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25
    },
    textTurnOn: {
        color: Colors.textColor,
        fontFamily: Fonts.REGULAR,
        fontSize: FontSize.fontBigMin,
        marginLeft: 5,
    },
    searchInput: {
        fontFamily: Fonts.MEDIUM,
        fontSize: FontSize.fontBigMedium,
        color: Colors.textColor,
        flex: 1,
        height: 30,
        marginLeft: 10
    }
})

export default TabNavigation;
