import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {Colors} from '../../../assets/Colors';
import SecureInput from '../../global-components/SecureInput';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Image} from 'react-native';
import CButton from '../../global-components/CButton';
import Fonts from '../../../assets/Fonts';
import FontSize from '../../../assets/FontSize';
import {View} from 'react-native';
import CustomHeader from '../../global-components/CustomHeader/CustomHeader';
const Logo = require('../../../assets/image/pinkker.png');
const LoginScreen = () => {
  return (
    <>
      <CustomHeader
        backgroundColor={Colors.componentsColor}
        title={
          <Image
            source={Logo}
            style={{height: 65, width: 250, alignSelf: 'center'}}
          />
        }
      />
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.screenColor,
        }}>
        <SafeAreaView style={{flex: 1}}>
          <View style={{flex: 0.7}} />
          <View
            style={{
              padding: 15,
            }}>
            <SecureInput
              styles={{marginTop: 20}}
              type="DEFAULT"
              placeholder="Email o usuario"
              icon={
                <Icon
                  name="envelope"
                  size={20}
                  color={Colors.textColor}
                  style={{marginRight: 10}}
                />
              }
            />
            <SecureInput
              styles={{marginTop: 20}}
              icon={
                <Icon
                  name="lock"
                  size={20}
                  color={Colors.textColor}
                  style={{marginRight: 10}}
                />
              }
              type="PASSWORD"
              placeholder="Contraseña"
            />

            <CButton
              styles={{
                marginTop: 20,
              }}
              buttonContent={
                <Text
                  style={{
                    fontFamily: Fonts.REGULAR,
                    fontSize: FontSize.fontBigMedium,
                    color: Colors.textColor,
                  }}>
                  Iniciar sesión
                </Text>
              }
            />
          </View>
          <View style={{flex: 3}} />
        </SafeAreaView>
      </View>
    </>
  );
};

export default LoginScreen;
