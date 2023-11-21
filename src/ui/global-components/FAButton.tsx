import { Colors } from '@assets-colors';
import React from 'react';
import { StyleProp, StyleSheet, TouchableOpacity } from 'react-native';
import { DEFAULT_SHADOW } from '../../utils/Utils';

export enum Positions {
    TOP_LEFT = 'TOP-LEFT',
    TOP_RIGHT = 'TOP_RIGHT',
    BOTTOM_RIGHT = 'BOTTOM_RIGHT',
    BOTTOM_LEFT = 'BOTTOM_LEFT',
}

interface IProps {
    children: React.ReactNode;
    position?: Positions;
    onPress: () => void;
}

const POSITIONS: StyleProp<any> = {
    [Positions.TOP_LEFT]: {
        alignSelf: 'flex-start',
        top: 30,
        left: 10,
    },
    [Positions.TOP_RIGHT]: {
        alignSelf: 'flex-end',
        top: 30,
        right: 10,
    },
    [Positions.BOTTOM_LEFT]: {
        alignSelf: 'flex-start',
        bottom: 30,
        left: 10,
    },
    [Positions.BOTTOM_RIGHT]: {
        alignSelf: 'flex-end',
        bottom: 30,
        right: 10,
    },
};

const FAButton = ({ children, onPress, position = Positions.BOTTOM_RIGHT }: IProps) => {
    return (
        <TouchableOpacity activeOpacity={0.89} onPress={onPress} style={[styles.FAButton, POSITIONS[position]]}>
            {children}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    FAButton: {
        position: 'absolute',
        zIndex: 9999,
        backgroundColor: Colors.componentsColor,
        ...DEFAULT_SHADOW,
    },
});

export default FAButton;
