import React from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import { Colors } from '@assets-colors';
import FontSize from '@fontSize';
import Fonts from '@fonts';
import useStreams from './hooks/useStreams';
import { getText } from '@getTexts';
import { ActivityIndicator } from 'react-native';
import StreamItem from '@global-components/StreamItem';


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
                    {getText().watch.home.title}
                </Text>
                <FlatList
                    style={{ flex: 1, margin: 5 }}
                    data={streams}
                    renderItem={({ item: stream, index }) => <StreamItem key={`StreamItem-following-${index}`} stream={stream} />}
                />

            </View>
        </SafeAreaView>
    );

};


export default FollowingScreen;


