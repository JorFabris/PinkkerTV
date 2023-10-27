import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Streams } from '@interfaces/GlobalInterfaces';
import { Colors } from '@assets-colors';
import Fonts from '@fonts';
import FontSize from '@fontSize';

const emptyBanner = require('@assets-images/emptyBanner.png');
const iconPinkker = require('@assets-images/icon_pinkker.png');

interface IProps {
    stream: Streams;
    key: React.Key
}

const StreamItem = ({ stream, key }: IProps) => {
    return (
        <TouchableOpacity style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 10,
            marginHorizontal: 10,
        }} activeOpacity={0.89} key={key} onPress={() => { }}>
            <Image source={emptyBanner} style={styles.bannerImage} />
            <View style={{ marginLeft: 5 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={iconPinkker} style={{ width: 23, height: 23, borderRadius: 100 }} />
                    <Text style={styles.streamerNickname}>{stream.streamer.nickName}</Text>
                </View>
                <Text ellipsizeMode="tail" style={styles.streamTitle}>{stream.streamTitle}</Text>
                <Text style={styles.streamCategory}>{stream.streamCategory}</Text>
            </View>
        </TouchableOpacity >
    );
};

const styles = StyleSheet.create({
    bannerImage: { height: 85, width: 145 },
    streamerNickname: { color: Colors.textColor, fontFamily: Fonts.BOLD, fontSize: FontSize.fontBigMedium, marginLeft: 5 },
    streamTitle: { color: Colors.textColor, fontFamily: Fonts.REGULAR, fontSize: FontSize.fontBigMedium },
    streamCategory: { color: Colors.textColor, fontFamily: Fonts.REGULAR, fontSize: FontSize.fontSubTitle },
});

export default StreamItem;
