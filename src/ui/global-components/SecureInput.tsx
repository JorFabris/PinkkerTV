/* eslint-disable react-hooks/exhaustive-deps */
import React, { ReactComponentElement, useEffect, useState } from 'react';
import {
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
  Animated,
  TextInputProps,
  Platform,
} from 'react-native';
import { Colors } from '../../assets/Colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Fonts from '../../assets/Fonts';
import { Text } from 'react-native';
import FontSize from '../../assets/FontSize';
import { NativeSyntheticEvent } from 'react-native';
import { TextInputFocusEventData } from 'react-native';

interface SecureInputsProps extends TextInputProps {
  icon?: ReactComponentElement<any>;
  placeholder: string;
  styles?: ViewStyle;
  name?: string;
  isPassword?: boolean;
  errors?: string;
  label?: string;
  validations?: Function[];
  hasError?: string;
}

const SecureInput = ({
  placeholder,
  isPassword = false,
  testID,
  icon,
  errors,
  styles,
  name,
  keyboardType,
  value,
  onBlur,
  onChangeText,
}: SecureInputsProps) => {
  const [inputColor, setInputColor] = useState(Colors.mainLightColor);
  const [obscureText, setObscureText] = useState(true);
  const [hasText, setHasText] = useState(false);
  const [moveLabel] = useState(new Animated.Value(0));
  const [fadeLabel] = useState(new Animated.Value(0));

  const labelShown = () => {
    Animated.timing(fadeLabel, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();

    Animated.timing(moveLabel, {
      toValue: -15,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };
  const labelDisappear = () => {
    Animated.timing(fadeLabel, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();

    Animated.timing(moveLabel, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    if (hasText) {
      labelShown();
    } else {
      labelDisappear();
    }
  }, [hasText]);

  useEffect(() => {
    errors !== undefined ? setInputColor(Colors.errorColor) : setInputColor(Colors.mainColor);
  }, [errors]);

  return (
    <View style={{ marginVertical: 5 }}>
      <View
        style={{
          borderBottomWidth: 0.5,
          padding: 3,
          borderBottomColor: inputColor,

          ...styles,
        }}>
        <View>
          <Animated.View
            style={{
              transform: [{ translateY: moveLabel }],
              opacity: fadeLabel,
              position: 'absolute',
            }}>
            <Text
              style={{
                fontFamily: Fonts.REGULAR,
                fontSize: FontSize.fontMin,
                color: inputColor,
                marginLeft: 30,
              }}>
              {placeholder}
            </Text>
          </Animated.View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            {icon}
            <TextInput
              testID={testID}
              value={value}
              keyboardType={keyboardType}
              onFocus={() => {
                setInputColor(Colors.mainColor);
              }}
              onBlur={(e: NativeSyntheticEvent<TextInputFocusEventData>) => {
                setInputColor(Colors.mainLightColor);
                onBlur!(e);
              }}
              placeholder={placeholder}
              onChangeText={val => {
                val.length > 0 ? setHasText(true) : setHasText(false);
                onChangeText!(val);
              }}
              placeholderTextColor={Colors.placeholderText}
              secureTextEntry={isPassword ? obscureText : false}
              style={{
                height: Platform.OS === 'ios' ? 40 : 45,
                color: Colors.textColor,
                flex: 1,
                fontFamily: Fonts.REGULAR,
                fontSize: 16,
              }}
            />
            {isPassword && (
              <TouchableOpacity
                onPress={() => setObscureText(!obscureText)}
                activeOpacity={0.6}>
                {obscureText ? (
                  <Icon name="eye" color={Colors.textColor} size={20} />
                ) : (
                  <Icon name="eye-slash" color={Colors.textColor} size={20} />
                )}
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
      <Text testID={`SecureInput.error-${name}`} style={{ fontFamily: Fonts.BOLD, fontSize: FontSize.fontBigMin, color: Colors.errorColor }}>{errors}</Text>
    </View>
  );
};

export default SecureInput;
