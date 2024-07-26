import React from 'react';
import {TouchableOpacity, TouchableOpacityProps, ViewStyle} from 'react-native';
import {Colors} from '../../assets/Colors';
import {View} from 'react-native';

interface IProps extends TouchableOpacityProps {
  backgroundColor?: string;
  buttonContent: React.ReactNode;
  styles?: ViewStyle;
  onPress: () => void;
}

const CButton = ({backgroundColor = Colors.mainColor, buttonContent, onPress, disabled, testID, styles}: IProps) => {
  return (
    <View style={{...styles, flexDirection: 'row'}}>
      <TouchableOpacity
        testID={testID}
        disabled={disabled}
        onPress={onPress}
        style={{
          height: 45,
          flex: 1,
          backgroundColor: disabled ? Colors.mainLightColor : backgroundColor,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {buttonContent}
      </TouchableOpacity>
    </View>
  );
};

export default CButton;
