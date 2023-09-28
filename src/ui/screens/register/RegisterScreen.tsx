import React from 'react';
import {
  Keyboard,
  SafeAreaView,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useFormik } from 'formik';
import { StackNavigationProp } from '@react-navigation/stack';
import { Colors } from '@assets-colors';
import CButton from '@global-components/CButton';
import DateCustomInput from '@global-components/DateCustomInput';
import { getText } from '@getTexts';
import FontSize from '@fontSize';
import Fonts from '@fonts';
import SecureInput from '@global-components/SecureInput';
import RegisterValidationSchema from '@screens/register/utils/RegisterValidationSchema';

interface IProps {
  navigation: StackNavigationProp<any, any>;
}
const RegisterScreen = ({ }: IProps) => {


  const { handleChange, handleBlur, handleSubmit, values, errors } = useFormik({
    initialValues: { email: '', username: '', birthDate: '', password: '', rePassword: '' },
    onSubmit: (form) => console.log(form),
    validationSchema: RegisterValidationSchema,
  });

  return (
    <>

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
                errors={errors.email}
                value={values.email}
                name={'email'}
                styles={{ marginTop: 20 }}
                placeholder={getText().register.inputs.email}
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
                errors={errors.username}
                placeholder={getText().register.inputs.username}
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
                errors={errors.password}
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
                placeholder={getText().register.inputs.password}
              />
              <SecureInput
                onChangeText={handleChange('rePassword')}
                onBlur={handleBlur('rePassword')}
                value={values.rePassword}
                errors={errors.rePassword}
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
                placeholder={getText().register.inputs.rePassword}
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
                    {getText().register.button}
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

export default RegisterScreen;
