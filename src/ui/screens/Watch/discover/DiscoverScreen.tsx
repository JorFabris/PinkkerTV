import { Colors } from '@assets-colors';
import React from 'react';
import { ActivityIndicator, SafeAreaView, ScrollView, View, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import useStreams from './hooks/useStreams';
import StreamItem from '@global-components/StreamItem';
import StreamCarousel from '@global-components/StreamCarousel';
import { CATEGORIES } from '@assets/Categories';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Fonts from '@fonts';
import FontSize from '@fontSize';

const DiscoverScreen = () => {

    const { streams, loading } = useStreams();

    if (loading) {
        return (
            <View style={{ flex: 1, backgroundColor: Colors.screenColor, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size={30} color={Colors.mainColor} />
            </View>
        );
    }



    return (
        <SafeAreaView style={{ flex: 1 }}>

            <View style={{
                backgroundColor: Colors.screenColor,
                flex: 1,
            }}>
                <ScrollView>
                    <StreamCarousel streams={streams} />
                    <View style={{ margin: 10 }}>
                        <FlatList
                            data={CATEGORIES}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            style={{ flex: 1 }}
                            renderItem={({ item }) => (
                                <TouchableOpacity activeOpacity={0.80} style={styles.itemCategory}>
                                    <Text style={styles.itemText}>{item.title}</Text>
                                    <Icon name={item.icon} color={Colors.white} size={20} />
                                </TouchableOpacity>)}
                        />
                    </View>
                    <FlatList
                        data={streams}
                        style={{ flex: 1 }}
                        renderItem={({ item: stream, index }) => (<StreamItem stream={stream} key={`StreamItem-${index}`} />)}
                    />
                </ScrollView>
            </View>
        </SafeAreaView >
    );

};


const styles = StyleSheet.create({
    itemCategory: {
        height: 40,
        width: 190,
        flexDirection: 'row',
        marginHorizontal: 10,
        backgroundColor: Colors.mainColor,
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        alignItems: 'center',
    },
    itemText: {
        color: Colors.white,
        fontFamily: Fonts.BLACK,
        fontSize: FontSize.fontTwentyTwo,
    },
});


export default DiscoverScreen;
