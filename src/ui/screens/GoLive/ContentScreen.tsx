import { Colors } from '@assets-colors';
import FontSize from '@fontSize';
import Fonts from '@fonts';
import { getText } from '@getTexts';
import React from 'react';
import { Dimensions, ScrollView, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const SIZE = Dimensions.get('screen').width * 0.5;

const ContentScreen = () => {
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{
            flex: 1,
            backgroundColor: Colors.screenColor,
        }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Icon name="film" color={Colors.textColor} size={SIZE} />
                <Text style={{ color: Colors.textColor, fontFamily: Fonts.BOLD, fontSize: FontSize.twenty }}>{getText().goLive.content.emptyState}</Text>
            </View>
        </ScrollView >
    );
};

export default ContentScreen;
