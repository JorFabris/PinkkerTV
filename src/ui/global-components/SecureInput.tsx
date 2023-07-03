import React, {ReactComponentElement, useState} from 'react';
import {TextInput, TouchableOpacity, View, ViewStyle} from 'react-native';
import {Colors} from '../../assets/Colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Fonts from '../../assets/Fonts';

interface SecureInputsProps {
  icon?: ReactComponentElement<any>;
  placeholder: string;
  styles?: ViewStyle;
  type: 'PASSWORD' | 'DEFAULT';
}

const SecureInput = ({placeholder, type, icon, styles}: SecureInputsProps) => {
  const [focusColor, setFocusColor] = useState(Colors.mainLightColor);
  const [obscureText, setObscureText] = useState(true);

  return (
    <View
      style={{
        borderBottomWidth: 0.5,
        padding: 3,
        borderBottomColor: focusColor,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        ...styles,
      }}>
      {icon}
      <TextInput
        onFocus={() => setFocusColor(Colors.mainColor)}
        onBlur={() => setFocusColor(Colors.mainLightColor)}
        secureTextEntry={type === 'PASSWORD' && obscureText}
        placeholder={placeholder}
        placeholderTextColor={Colors.placeholderText}
        style={{
          height: 40,
          color: Colors.textColor,
          flex: 1,
          fontFamily: Fonts.REGULAR,
          fontSize: 16,
        }}
      />
      {type === 'PASSWORD' && (
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
  );
};

export default SecureInput;
