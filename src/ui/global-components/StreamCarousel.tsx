import { Colors } from '@assets-colors';
import FontSize from '@fontSize';
import Fonts from '@fonts';
import { Streams } from '@interfaces/GlobalInterfaces';
import { formatViewers } from '@utils/Utils';
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
const emptyBanner = require('@assets-images/emptyBanner.png');
const screen = Dimensions.get('screen');
const ITEM_WIDTH = screen.width * 0.85;
const ITEM_HEIGHT = screen.height * 0.20;

interface IStreamCarousel {
    streams?: Streams[];
}


const StreamCarousel = ({ streams }: IStreamCarousel) => {

    return (
        <View style={{ marginVertical: 15 }} >
            <Carousel
                windowSize={1}
                style={{ width: '100%', height: 300 }}
                data={streams ?? []}
                itemWidth={ITEM_WIDTH}
                loop
                sliderWidth={screen.width}
                renderItem={
                    ({ item: { streamer, streamCategory, viewers }, index }) => (
                        <View style={{ width: ITEM_WIDTH, height: ITEM_HEIGHT + 50 }} key={`Key-${index}`}>
                            <Image source={emptyBanner} style={{ height: ITEM_HEIGHT, width: ITEM_WIDTH }} />
                            <View style={styles.bulletViewers}>
                                <Text style={{ color: Colors.textColor }}>{viewers.toString().length > 3 ? formatViewers(viewers) : viewers} Viewers</Text>
                            </View>
                            <View style={[styles.bulletViewers, { right: 10, backgroundColor: Colors.errorColor }]}>
                                <Text style={{ color: Colors.textColor, fontFamily: Fonts.MEDIUM, fontSize: FontSize.fontMin }}>LIVE</Text>
                            </View>
                            <View style={styles.containerInfo}>
                                <Text style={styles.streamerNickname}>{streamer.nickName}</Text>
                                <Text style={styles.streamCategory}>{streamCategory}</Text>
                            </View>
                        </View>
                    )} />
        </View>
    );

};


const styles = StyleSheet.create({
    bulletViewers: {
        position: 'absolute',
        marginLeft: 10,
        marginTop: 10,
        backgroundColor: Colors.componentsColor,
        padding: 3,
        borderRadius: 5,
    },
    containerInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 5,
    },
    streamerNickname: {
        fontFamily: Fonts.BOLD,
        fontSize: FontSize.fontBigMedium,
        color: Colors.textColor,
    },
    streamCategory: {
        fontFamily: Fonts.MEDIUM,
        fontSize: FontSize.fontBigMedium,
        color: Colors.textColor,
        marginLeft: 5,
    },
});


export default StreamCarousel;
