import { Colors } from '@assets-colors';
import FontSize from '@fontSize';
import Fonts from '@fonts';
import { getText } from '@getTexts';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { DEFAULT_SHADOW } from '../../../utils/Utils';
import CButton from '@global-components/CButton';
import FAButton, { Positions } from '@global-components/FAButton';
import Icon from 'react-native-vector-icons/FontAwesome5';

const HomeScreen = () => {
    const [online, setOnline] = useState(false);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FAButton
                onPress={() => { setOnline(!online); }}
                position={Positions.BOTTOM_RIGHT}
                children={
                    <View style={{ padding: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Icon name={online ? 'video-slash' : 'video'} color={Colors.textColor} size={22} />
                        <Text style={styles.goLiveButton}>{online ? getText().goLive.home.FAButton.off : getText().goLive.home.FAButton.on}</Text>
                    </View>
                }
            />
            <ScrollView style={{ flex: 1, backgroundColor: Colors.screenColor }}>
                <View style={styles.containerHeader}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ backgroundColor: online ? Colors.successColor : Colors.errorColor, borderRadius: 5 }}>
                            <Text style={styles.titleCard}>
                                {online ? getText().goLive.home.online.toUpperCase() : getText().goLive.home.offline.toUpperCase()}
                            </Text>
                        </View>
                        <Text style={styles.labelCard}>{getText().goLive.home.stream}</Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.titleCard}>-</Text>
                        <Text style={styles.labelCard}>{getText().goLive.home.duration}</Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.titleCard}>-</Text>
                        <Text style={styles.labelCard}>{getText().goLive.home.viewers}</Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.titleCard}>2</Text>
                        <Text style={styles.labelCard}>{getText().goLive.home.followers}</Text>
                    </View>
                </View>

                <View style={styles.containerStreamView}>
                    <View style={{ height: 200, backgroundColor: Colors.warmGrey, width: '100%' }}>
                        <View
                            style={{
                                alignSelf: 'flex-start',
                                backgroundColor: online ? Colors.successColor : Colors.errorColor,
                                borderRadius: 5,
                                margin: 6,
                            }}>
                            <Text style={styles.titleCard}>
                                {online ? getText().goLive.home.online.toUpperCase() : getText().goLive.home.offline.toUpperCase()}
                            </Text>
                        </View>
                    </View>

                    <CButton
                        testID="LoginScreen.loginButton"
                        onPress={() => { }}
                        styles={{
                            marginTop: 10,
                        }}
                        buttonContent={
                            <Text
                                style={{
                                    fontFamily: Fonts.BOLD,
                                    fontSize: FontSize.fontBigMedium,
                                    color: Colors.textColor,
                                }}>
                                {getText().goLive.home.streamManager}
                            </Text>
                        }
                    />
                    <CButton
                        testID="LoginScreen.loginButton"
                        onPress={() => { }}
                        backgroundColor={Colors.warmGrey}
                        styles={{
                            marginTop: 10,
                        }}
                        buttonContent={
                            <Text
                                style={{
                                    fontFamily: Fonts.BOLD,
                                    fontSize: FontSize.fontBigMedium,
                                    color: Colors.textColor,
                                }}>
                                {getText().goLive.home.editStreamInfo}
                            </Text>
                        }
                    />
                </View>
                <View style={{ justifyContent: 'center' }}>
                    <Text style={styles.subtitle}>{getText().goLive.home.subtitle}</Text>
                </View>
                <View style={styles.containerTooQuiet}>
                    <Text style={styles.tooQuietTitle}>{getText().goLive.home.emptyStateTitle}</Text>
                    <Text style={styles.tooQuietSubtitle}>{getText().goLive.home.emptyStateSubtitle}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    containerHeader: {
        flexDirection: 'row',
        height: 85,
        backgroundColor: Colors.componentsColor,
        marginHorizontal: 10,
        marginVertical: 20,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        ...DEFAULT_SHADOW,
    },
    containerStreamView: {
        backgroundColor: Colors.componentsColor,
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 8,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        ...DEFAULT_SHADOW,
    },
    titleCard: {
        color: Colors.textColor,
        fontFamily: Fonts.BOLD,
        fontSize: FontSize.fontBigMin,
        margin: 2,
    },
    labelCard: {
        color: Colors.textColor,
        fontSize: FontSize.fontBigMin,
        fontFamily: Fonts.REGULAR,
    },
    subtitle: {
        fontFamily: Fonts.REGULAR,
        color: Colors.textColor,
        textAlign: 'center',
    },
    containerTooQuiet: {
        justifyContent: 'center',
        marginVertical: 40,
        marginHorizontal: 30,
    },
    tooQuietTitle: {
        fontFamily: Fonts.BOLD,
        fontSize: FontSize.fontBigMedium2,
        color: Colors.textColor,
        textAlign: 'center',
    },
    tooQuietSubtitle: {
        fontFamily: Fonts.REGULAR,
        fontSize: FontSize.fontSubTitle,
        color: Colors.textColor,
        textAlign: 'center',
    },
    goLiveButton: {
        color: Colors.textColor,
        fontFamily: Fonts.BOLD,
        marginLeft: 8,
        fontSize: FontSize.fontBigMedium2,
    },
});

export default HomeScreen;
