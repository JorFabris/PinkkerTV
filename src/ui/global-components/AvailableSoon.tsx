import React from 'react';
import { Colors } from '@assets-colors';
import FontSize from '@fontSize';
import Fonts from '@fonts';
import { Text, View } from 'react-native';

const AvailableSoon = () => {
    return (
        <View style={{ flex: 1, backgroundColor: Colors.screenColor, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: Colors.textColor, fontFamily: Fonts.BOLD, fontSize: FontSize.twentyEight }}>Disponible pronto</Text>
        </View>
    );
};

export default AvailableSoon;
