import { Colors } from '@assets-colors';
import React from 'react';
import { ActivityIndicator, SafeAreaView, ScrollView, View } from 'react-native';
import useStreams from './hooks/useStreams';
import StreamItem from '@global-components/StreamItem';
import StreamCarousel from '@global-components/StreamCarousel';

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
                    {streams && streams.map((stream, index) => {
                        return <StreamItem key={`Streams-List-Key-${index}`} stream={stream} />;
                    })}
                </ScrollView>
            </View>
        </SafeAreaView>
    );

};


export default DiscoverScreen;
