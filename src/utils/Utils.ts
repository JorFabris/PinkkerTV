import { Platform } from 'react-native';

export const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 55 : 28;

export const DEFAULT_SHADOW = {
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
};

export const formatViewers = (viewers: number) => {
    return `${viewers.toLocaleString().split(',')[0]}K`;
};
