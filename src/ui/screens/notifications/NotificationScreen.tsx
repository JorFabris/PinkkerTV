import { Colors } from '@assets-colors';
import FontSize from '@fontSize';
import Fonts from '@fonts';
import { getText } from '@getTexts';
import React from 'react';
import { Text, View } from 'react-native';

const NotificationsScreen = () => {


    return (
        <View style={{ flex: 1, backgroundColor: Colors.screenColor, justifyContent: 'center', alignItems: 'center' }} >
            <Text style={{ color: Colors.textColor, fontFamily: Fonts.BOLD, fontSize: FontSize.fontTwentyTwo }}>{getText().notifications.emptyState}</Text>
        </View>
    );
};



export default NotificationsScreen;
