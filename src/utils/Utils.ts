import { Platform } from 'react-native';

export const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 55 : 28;


export const formatViewers = (viewers: number) => {
    return `${viewers.toLocaleString().split(',')[0]}K`;
};
