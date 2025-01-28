import {Colors} from '@assets-colors';
import Fonts from '@fonts';
import FontSize from '@fontSize';
import {getText} from '@getTexts';
import React from 'react';
import {FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import useStream from './hooks/useStream';
import ItemMessage from './components/ItemMessage';

const iconPinkker = require('@assets-images/icon_pinkker.png');

const StreamScreen = () => {
  const {stream, messages, addMessage, message, setMessage, refList} = useStream();
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          backgroundColor: Colors.screenColor,
          flex: 1,
        }}>
        <View style={styles.videoPlayer} />
        <View style={styles.containerStreamerInfo}>
          <View style={{flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between'}}>
            <Image source={iconPinkker} style={styles.avatar} />
            <View style={{marginLeft: 10}}>
              <View style={styles.containerAvatarAndName}>
                <Text
                  style={{
                    fontFamily: Fonts.BOLD,
                    fontSize: FontSize.fontBigMedium,
                    color: Colors.white,
                  }}>
                  {stream?.streamer.nickName}
                </Text>
                <View style={styles.badgeVerified}>
                  <Icon name="check" color={Colors.white} />
                </View>
              </View>
              <Text
                style={{
                  fontFamily: Fonts.REGULAR,
                  fontSize: FontSize.fontBigMedium,
                  color: Colors.white,
                }}>
                {stream?.streamTitle}
              </Text>
              <Text
                style={{
                  fontFamily: Fonts.REGULAR,
                  fontSize: FontSize.fontMin,
                  color: Colors.warmGrey,
                }}>
                {stream?.streamCategory}
              </Text>
              <View style={{flexDirection: 'row', gap: 5}}>
                {stream?.streamer.categories.map(item => {
                  return (
                    <View style={{backgroundColor: Colors.warmGrey, paddingHorizontal: 10, borderRadius: 5}}>
                      <Text
                        style={{
                          fontFamily: Fonts.REGULAR,
                          fontSize: FontSize.fontMin,
                          color: Colors.white,
                        }}>
                        {item}
                      </Text>
                    </View>
                  );
                })}
              </View>
            </View>
          </View>

          <TouchableOpacity style={styles.giftASub}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
              <Icon name="star" solid color={Colors.white} style={{marginRight: 10}} />
              <Text
                style={{
                  fontFamily: Fonts.REGULAR,
                  fontSize: FontSize.fontBigMedium,
                  color: Colors.white,
                }}>
                {getText().watch.stream.giftASub}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <FlatList ref={refList} data={messages} renderItem={({item: msg}) => <ItemMessage message={msg} />} />

        <View style={{flexDirection: 'row', padding: 10, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            style={{paddingVertical: 10, paddingHorizontal: 20, backgroundColor: Colors.mainColor, borderRadius: 100, marginRight: 10}}>
            <Icon name="box" size={19} />
          </TouchableOpacity>
          <TextInput
            placeholder={getText().watch.stream.sendAMessage}
            value={message}
            onChangeText={text => setMessage(text)}
            placeholderTextColor={Colors.placeholderText}
            style={{backgroundColor: Colors.componentsColor, flex: 1, height: 45, paddingHorizontal: 10, color: Colors.textColor}}
          />

          {message?.length! > 0 ? (
            <TouchableOpacity
              style={{paddingVertical: 10, paddingHorizontal: 20}}
              onPress={() => {
                addMessage(message);
                setMessage('');
              }}>
              <Icon name="paper-plane" color={Colors.mainColor} size={20} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={{paddingVertical: 10, paddingHorizontal: 20}}>
              <Icon name="ellipsis-v" size={19} color={Colors.whiteThree} />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  videoPlayer: {
    width: '100%',
    height: '30%',
    backgroundColor: Colors.errorColor,
  },
  containerStreamerInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    backgroundColor: Colors.componentsColor,
    padding: 10,
  },
  giftASub: {
    backgroundColor: Colors.mainColor,
    borderRadius: 8,
    padding: 5,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerAvatarAndName: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  badgeVerified: {
    marginLeft: 5,
    padding: 5,
    borderRadius: 100,
    backgroundColor: Colors.mainColor,
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatar: {width: 45, height: 45, borderRadius: 100},
});

export default StreamScreen;
