import {Colors} from '@assets-colors';
import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

const StreamScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          backgroundColor: Colors.screenColor,
          flex: 1,
        }}
      />
    </SafeAreaView>
  );
};

export default StreamScreen;
