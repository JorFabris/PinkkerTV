import RootStore from '../RootStore';
import ColorsDark from './colors/ColorsDark';
import ColorsLight from './colors/ColorsLight';

export const Colors =
  RootStore.app.theme === 'LIGHT' ? ColorsLight : ColorsDark;
