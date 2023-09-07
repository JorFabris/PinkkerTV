import React from 'react';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Colors } from '@assets-colors';
import FontSize from '@fontSize';
import Fonts from '@fonts';
import useStreams from './hooks/useStreams';
import { getText } from '@getTexts';
import { ActivityIndicator } from 'react-native';

const emptyBanner = require('@assets-images/emptyBanner.png');
const iconPinkker = require('@assets-images/icon_pinkker.png');

const FollowingScreen = () => {

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
                <Text style={{
                    color: Colors.textColor,
                    fontFamily: Fonts.BOLD,
                    fontSize: FontSize.twenty,
                    marginLeft: 10,
                }}>
                    {getText().home.title}
                </Text>
                <FlatList
                    data={streams}
                    renderItem={({ item: stream }) => <View style={{
                        flexDirection: 'row',
                        margin: 10,
                    }}>
                        <Image source={emptyBanner} style={styles.bannerImage} />
                        <View style={{ marginHorizontal: 5 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image source={iconPinkker} style={{ width: 23, height: 23, borderRadius: 100 }} />
                                <Text style={styles.streamerNickname}>{stream.streamer.nickName}</Text>
                            </View>
                            <Text ellipsizeMode="tail" style={styles.streamTitle}>{stream.streamTitle}</Text>
                        </View>
                    </View>}
                />

            </View>
        </SafeAreaView>
    );

};


export default FollowingScreen;

const styles = StyleSheet.create({
    bannerImage: { height: 65, width: 130, borderRadius: 5 },
    streamerNickname: { color: Colors.textColor, fontFamily: Fonts.BOLD, fontSize: FontSize.fontBigMedium, marginLeft: 5 },
    streamTitle: { color: Colors.textColor, fontFamily: Fonts.BOLD, fontSize: FontSize.fontBigMedium },
});
