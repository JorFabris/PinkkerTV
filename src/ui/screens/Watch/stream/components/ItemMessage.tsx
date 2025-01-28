import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {TypeMessages} from '../hooks/useStream';
import Fonts from '@fonts';
import FontSize from '@fontSize';
import {Colors} from '@assets-colors';

const COLORS = [Colors.errorColor, Colors.green, Colors.orange, Colors.purpleService, Colors.blue, Colors.linkColor, Colors.mainColor];

const ItemMessage = ({message}: {message: TypeMessages}) => {
  const [color, setColor] = useState(Colors.textColor);

  useEffect(() => {
    setColor(COLORS[Math.floor(Math.random() * 7)]);
  }, []);

  return (
    <View style={{flexDirection: 'row', marginVertical: 5}}>
      <Text
        style={{
          fontFamily: Fonts.REGULAR,
          fontSize: FontSize.fontMin,
          color: Colors.textColor,
        }}>
        {message.time}
      </Text>
      <Text
        style={{
          marginLeft: 5,
          fontFamily: Fonts.REGULAR,
          fontSize: FontSize.fontMin,
          color: color,
        }}>
        {message.user.name} :
      </Text>
      <Text
        style={{
          marginLeft: 5,
          fontFamily: Fonts.REGULAR,
          fontSize: FontSize.fontMin,
          color: Colors.textColor,
        }}>
        {message.message}
      </Text>
    </View>
  );
};

export default ItemMessage;
