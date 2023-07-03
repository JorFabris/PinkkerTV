import React, {ReactComponentElement} from 'react';
import {TouchableOpacity, ViewStyle} from 'react-native';
import {Colors} from '../../assets/Colors';
import {View} from 'react-native';

interface IProps {
  backgroundColor?: string;
  buttonContent: ReactComponentElement<any>;
  styles?: ViewStyle;
}

const CButton = ({
  backgroundColor = Colors.mainColor,
  buttonContent,
  styles,
}: IProps) => {
  return (
    <View style={{...styles, flexDirection: 'row'}}>
      <TouchableOpacity
        style={{
          height: 45,
          flex: 1,
          backgroundColor,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
        }}>
        {buttonContent}
      </TouchableOpacity>
    </View>
  );
};

export default CButton;
