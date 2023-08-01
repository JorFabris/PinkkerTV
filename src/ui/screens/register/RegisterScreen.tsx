import React, { useEffect, useRef, useState } from 'react';
import {
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Colors } from '../../../assets/Colors';
import SecureInput from '../../global-components/SecureInput';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Fonts from '../../../assets/Fonts';
import FontSize from '../../../assets/FontSize';
import { useFormik } from 'formik';
import CButton from '../../global-components/CButton';
import CustomHeader from '../../global-components/CustomHeader/CustomHeader';
import { StackNavigationProp } from '@react-navigation/stack';
import RegisterValidationSchema from './utils/RegisterValidationSchema';
import DateCustomInput from '../../global-components/DateCustomInput';


interface IProps {
  navigation: StackNavigationProp<any, any>;
}
const RegisterScreen = ({ navigation }: IProps) => {


  const { handleChange, handleBlur, handleSubmit, values, errors } = useFormik({
    initialValues: { email: '', username: '', birthDate: '', password: '', rePassword: '' },
    onSubmit: (values) => console.log(values),
    validationSchema: RegisterValidationSchema
  })




  return (
    <>
      <CustomHeader
        backgroundColor={Colors.componentsColor}
        startSlot={
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}>
            <Icon name="chevron-left" size={25} color={Colors.textColor} />
          </TouchableOpacity>
        }
        title={
          <Text
            style={{
              fontFamily: Fonts.BOLD,
              fontSize: FontSize.fontTitle,
              color: Colors.textColor,
              alignSelf: 'center',
            }}>
            Registrate
          </Text>
        }
      />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={{
            flex: 1,
            backgroundColor: Colors.screenColor,
          }}>
          <SafeAreaView style={{ flex: 1 }}>
            <View
              style={{
                backgroundColor: Colors.componentsColor,
                margin: 10,
                padding: 15,
                borderRadius: 10,
              }}>
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
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                name={'username'}
                errors={errors['username']}
                placeholder="Usuario"
                value={values.username}
                icon={
                  <Icon
                    name="at"
                    size={20}
                    color={Colors.textColor}
                    style={{ marginRight: 10 }}
                  />
                }
              />
              <DateCustomInput />
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
              <SecureInput
                onChangeText={handleChange('rePassword')}
                onBlur={handleBlur('rePassword')}
                value={values.rePassword}
                errors={errors['rePassword']}
                name={'rePassword'}
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
                placeholder="Repetir contraseña"
              />

              <CButton
                onPress={handleSubmit}
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
                    Registrarme
                  </Text>
                }
              />
            </View>
          </SafeAreaView>
        </View>
      </TouchableWithoutFeedback>
    </>

  );
};

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    left: 15,
  },
});

export default RegisterScreen;
