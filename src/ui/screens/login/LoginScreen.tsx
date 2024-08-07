import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {Colors} from '@assets-colors';
import SecureInput from '@global-components/SecureInput';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Image} from 'react-native';
import CButton from '@global-components/CButton';
import Fonts from '@fonts';
import FontSize from '@fontSize';
import {View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useFormik} from 'formik';
import LoginValidationSchema from './utils/LoginValidationSchema';
import {getText} from '@getTexts';
import Screens from '../../../Screens';
import {useNavigation} from '@react-navigation/native';

const Logo = require('@assets-images/pinkker.png');

const LoginScreen = () => {
  const navigation = useNavigation<StackNavigationProp<any, any>>();
  const {handleChange, handleBlur, handleSubmit, values, errors} = useFormik({
    initialValues: {email: '', password: ''},
    onSubmit: () => navigation.replace(Screens.Stack.WatchNavigation),
    validationSchema: LoginValidationSchema,
  });

  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.screenColor,
        }}>
        <SafeAreaView style={{flex: 1}}>
          <View style={{flex: 1.5}} />
          <View
            style={{
              padding: 15,
              backgroundColor: Colors.componentsColor,
              margin: 10,
              borderRadius: 10,
            }}>
            <Image source={Logo} style={{height: 65, width: 250, alignSelf: 'center'}} />
            {}
            <SecureInput
              testID="LoginScreen.email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              errors={errors.email}
              value={values.email}
              name={'email'}
              styles={{marginTop: 20}}
              placeholder={getText().login.inputs.email}
              icon={<Icon name="envelope" size={20} color={Colors.textColor} style={{marginRight: 10}} />}
            />
            <SecureInput
              testID="LoginScreen.password"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              errors={errors.password}
              name={'password'}
              styles={{marginTop: 20}}
              icon={<Icon name="lock" size={20} color={Colors.textColor} style={{marginRight: 10}} />}
              isPassword={true}
              placeholder={getText().login.inputs.password}
            />

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                marginTop: 15,
              }}>
              <TouchableOpacity>
                <Text
                  style={{
                    color: Colors.textColor,
                    fontFamily: Fonts.REGULAR,
                    fontSize: FontSize.fontBigMedium,
                  }}>
                  {getText().login.forgotPassword}
                </Text>
              </TouchableOpacity>
            </View>

            <CButton
              testID="LoginScreen.loginButton"
              onPress={handleSubmit}
              disabled={Object.entries(errors).length > 0}
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
                  {getText().login.button}
                </Text>
              }
            />
          </View>
          <View style={{flex: 3}} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity testID="LoginScreen.registerButton" onPress={() => navigation.navigate(Screens.Stack.RegisterScreen)}>
              <Text
                style={{
                  fontFamily: Fonts.REGULAR,
                  fontSize: FontSize.fontBigMedium,
                  color: Colors.textColor,
                }}>
                {getText().login.register}
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    </>
  );
};

export default LoginScreen;
