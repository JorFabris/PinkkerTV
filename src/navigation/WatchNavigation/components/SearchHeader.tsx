import React from 'react';
import { Colors } from '@assets-colors';
import { getText } from '@getTexts';
import { useNavigation } from '@react-navigation/native';
import { STATUSBAR_HEIGHT } from '@utils/Utils';
import { Platform, SafeAreaView, StatusBar, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { StatusBarStyle } from 'react-native';
import Fonts from '@fonts';
import FontSize from '@fontSize';

const SearchHeader = () => {
    const navigation = useNavigation();
    return (
        <View style={{ backgroundColor: Colors.componentsColor }}>
            <View
                style={{ height: STATUSBAR_HEIGHT, backgroundColor: Colors.componentsColor }}>
                <StatusBar
                    translucent
                    barStyle={Colors.statusBar as StatusBarStyle}
                    backgroundColor={Colors.componentsColor}
                />
            </View>
            <SafeAreaView>
                <View style={{ flexDirection: 'row', padding: 15, alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name="chevron-left" size={20} color={Colors.textColor} />
                    </TouchableOpacity>

                    <TextInput
                        placeholder={getText().watch.search.placeholder}
                        placeholderTextColor={Colors.placeholderText}
                        style={styles.searchInput}
                    />

                </View>

            </SafeAreaView>

        </View>
    );
};


export default SearchHeader;


const styles = StyleSheet.create({
    searchInput: {
        fontFamily: Fonts.MEDIUM,
        fontSize: FontSize.fontBigMedium,
        color: Colors.textColor,
        flex: 1,
        height: Platform.OS === 'ios' ? 30 : 45,
        marginLeft: 10,
    },
});
