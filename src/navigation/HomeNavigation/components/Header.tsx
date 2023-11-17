import React from 'react';
import { SafeAreaView, StatusBar, TouchableOpacity, View, Platform, StyleSheet, Text, StatusBarStyle } from 'react-native';
import { Colors } from '@assets-colors';
import FontSize from '@fontSize';
import Fonts from '@fonts';
import Screens from '../../../Screens';
import { getText } from '@getTexts';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { STATUSBAR_HEIGHT } from '@utils/Utils';
import IconMaterialDesign from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome5';


const Header = ({ title }: { title: string }) => {
    const navigation = useNavigation<BottomTabNavigationProp<any, any>>();
    return (
        <View>
            <View
                style={{ height: STATUSBAR_HEIGHT, backgroundColor: Colors.componentsColor }}>
                <StatusBar
                    translucent
                    barStyle={Colors.statusBar as StatusBarStyle}
                    backgroundColor={Colors.componentsColor}
                />
            </View>
            <SafeAreaView style={{ backgroundColor: Colors.componentsColor }}>
                <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 10 }}>
                        <TouchableOpacity
                            activeOpacity={0.71}
                            style={[styles.btnIcon, { backgroundColor: Colors.mainColor }]}
                        >
                            <Icon name="user" color={Colors.textColor} size={20} />
                        </TouchableOpacity>
                        <View style={{ flex: 1 }} />

                        <TouchableOpacity
                            onPress={() => navigation.navigate(Screens.Stack.NotificationsScreen)}
                            activeOpacity={0.71}
                            style={styles.btnIcon}
                        >
                            <Icon name="bell" solid color={Colors.textColor} size={20} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.71}
                            style={styles.btnIcon}
                            onPress={() => navigation.navigate(Screens.Stack.InboxScreen)}
                        >
                            <Icon name="comments" solid color={Colors.textColor} size={20} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.71}
                            style={styles.btnTurnOn}
                        >
                            <IconMaterialDesign name="broadcast" color={Colors.textColor} size={20} />
                            <Text style={styles.textTurnOn}>{getText().home.turnOn}</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{ marginHorizontal: 10, marginVertical: 5, fontFamily: Fonts.BLACK, color: Colors.textColor, fontSize: FontSize.thirtyTwo }}>
                        {title}
                    </Text>
                </View>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    btnIcon: {
        padding: 9,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
    },
    btnTurnOn: {
        backgroundColor: Colors.white_40,
        padding: 6,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
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
        height: Platform.OS === 'ios' ? 30 : 45,
        marginLeft: 10,
    },
});


export default Header;
