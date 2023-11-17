import { Colors } from '@assets-colors';
import FontSize from '@fontSize';
import Fonts from '@fonts';
import { getText } from '@getTexts';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Categories from './components/Categories';
import LiveChannels from './components/LiveChannels';

type TypeSelectors = {
    title: String,
    open: boolean,
    children: React.JSX.Element
}

const SELECTORS: TypeSelectors[] = [
    {
        title: getText().explore.selectors.categories,
        open: true,
        children: <Categories />,
    },
    {
        title: getText().explore.selectors.live,
        open: false,
        children: <LiveChannels />,
    },
];
const ExploreScreen = () => {

    const [selectors, setSelectors] = useState<TypeSelectors[]>(SELECTORS);

    const openSelector = () => {
        const newSelectors = selectors.map(sel => {
            sel.open = !sel.open;
            return sel;
        });
        setSelectors(newSelectors);
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: Colors.screenColor }}>
                <View style={{ flexDirection: 'row' }}>
                    {selectors.map(selector => {
                        return (

                            <TouchableOpacity onPress={openSelector} style={[styles.buttonSelector, { borderBottomColor: selector.open ? Colors.mainColor : 'transparent', borderBottomWidth: 2 }]}>
                                <Text style={[styles.textSelector, { color: selector.open ? Colors.mainColor : Colors.textColor }]}>{selector.title}</Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>
                {selectors.map(select => {
                    if (select.open) {
                        return select.children;
                    }
                    return (<></>);
                })}
            </View>
        </SafeAreaView>
    );

};


const styles = StyleSheet.create({
    buttonSelector: {
        marginVertical: 10,
        marginHorizontal: 15,
        paddingBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textSelector: {
        color: Colors.textColor,
        fontFamily: Fonts.BOLD,
        fontSize: FontSize.fontBigMin,
    },

});

export default ExploreScreen;
