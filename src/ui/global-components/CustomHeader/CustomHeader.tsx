import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, View, StatusBarStyle} from 'react-native';
import {Colors} from '../../../assets/Colors';
import RootStore from '../../../RootStore';
import {Dimensions} from 'react-native';
import {Platform} from 'react-native';
import {StyleSheet} from 'react-native';
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 55 : 28;
const screen = Dimensions.get('screen');

interface IProps {
  title?: any;
  actions?: any;
  startSlot?: any;
  backgroundColor?: string;
  endSlot?: any;
}

const CustomHeader = ({title, backgroundColor, endSlot, startSlot}: IProps) => {
  useEffect(() => {}, []);

  return (
    <>
      <View
        style={[styles.statusBar, {backgroundColor: Colors.componentsColor}]}>
        <StatusBar
          translucent
          barStyle={Colors.statusBar as StatusBarStyle}
          backgroundColor={Colors.componentsColor}
        />
      </View>
      <SafeAreaView>
        <View style={[styles.header, {backgroundColor}]}>
          {startSlot && startSlot}
          {title}
          {endSlot && endSlot}
        </View>
        <View
          style={{
            width: '100%',
            height: 2,
            backgroundColor:
              RootStore.app.theme === 'DARK'
                ? Colors.componentsColor
                : 'rgba(0, 0, 0, 0.03)',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 2.84,

            elevation: 1,
          }}
        />
      </SafeAreaView>
    </>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  header: {
    width: screen.width,
    height: 55,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iosShadows: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  backButton: {
    position: 'absolute',
    left: 10,
  },

  badge: {
    width: 22,
    height: 22,
    backgroundColor: Colors.mainColor,
    borderRadius: 100,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    right: -8,
    top: -12,
    position: 'absolute',
    zIndex: 1000,
  },
});
