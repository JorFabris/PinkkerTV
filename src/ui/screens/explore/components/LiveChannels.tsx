
import { Colors } from '@assets-colors';
import StreamItem from '@global-components/StreamItem';
import useStreams from '@screens/following/hooks/useStreams';
import React from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';




const LiveChannels = () => {
    const { streams, loading } = useStreams();

    if (loading) {
        return (
            <View style={{ flex: 1, backgroundColor: Colors.screenColor, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size={30} color={Colors.mainColor} />
            </View>
        );
    }

    return (

        <View style={{ flex: 1 }}>
            <FlatList
                style={{ flex: 1, margin: 5 }}
                data={streams}
                renderItem={({ item: stream, index }) => <StreamItem key={`StreamItem-following-${index}`} stream={stream} />}
            />
        </View>
    );
};

export default LiveChannels;
