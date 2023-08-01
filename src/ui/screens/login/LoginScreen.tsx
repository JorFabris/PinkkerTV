import React, { useEffect } from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { Colors } from '../../../assets/Colors';
import SecureInput from '../../global-components/SecureInput';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Image } from 'react-native';
import CButton from '../../global-components/CButton';
import Fonts from '../../../assets/Fonts';
import FontSize from '../../../assets/FontSize';
import { View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useFormik } from 'formik';
import LoginValidationSchema from './utils/LoginValidationSchema';

const Logo = require('../../../assets/image/pinkker.png');

interface IProps {
  navigation: StackNavigationProp<any, any>;
}
const LoginScreen = ({ navigation }: IProps) => {

  const { handleChange, handleBlur, handleSubmit, values, errors } = useFormik({
    initialValues: { email: '', password: '' },
    onSubmit: (values) => console.log(values),
    validationSchema: LoginValidationSchema
  })



  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.screenColor,
        }}>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ flex: 1.5 }} />
          <View
            style={{
              padding: 15,
              backgroundColor: Colors.componentsColor,
              margin: 10,
              borderRadius: 10,
            }}>
            <Image
              source={Logo}
              style={{ height: 65, width: 250, alignSelf: 'center' }}
            />
            { }
            <SecureInput
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              errors={errors['email']}
              value={values.email}
              name={'email'}
              styles={{ marginTop: 20 }}
              placeholder="Email o usuario"
              icon={
                <Icon
                  name="envelope"
                  size={20}
                  color={Colors.textColor}
                  style={{ marginRight: 10 }}
                />
              }
            />
            <SecureInput
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              errors={errors['password']}
              name={'password'}
              styles={{ marginTop: 20 }}
              icon={
                <Icon
                  name="lock"
                  size={20}
                  color={Colors.textColor}
                  style={{ marginRight: 10 }}
                />
              }
              isPassword={true}
              placeholder="Contraseña"
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
                  ¿Olvidaste tu contraseña?
                </Text>
              </TouchableOpacity>
            </View>

            <CButton
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
                  Iniciar sesión
                </Text>
              }
            />

          </View>
          <View style={{ flex: 3 }} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity onPress={() => navigation.push('RegisterScreen')}>
              <Text
                style={{
                  fontFamily: Fonts.REGULAR,
                  fontSize: FontSize.fontBigMedium,
                  color: Colors.textColor,
                }}>
                ¿No tenes cuenta? Registrate acá
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    </>
  );
};

export default LoginScreen;
