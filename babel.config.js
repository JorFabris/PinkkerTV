module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    //if you already have other plugin just paste this lines below
    [
      'module-resolver',
      {
        alias: {
          '@': 'src/*',
          '@global-components': './src/ui/global-components',
          '@assets-images': './src/assets/images',
          '@navigation': './src/navigation',
          '@interfaces': './src/interfaces',
          '@fontSize': './src/assets/FontSize.ts',
          '@screens': './src/ui/screens',
          '@fonts': './src/assets/Fonts.ts',
          '@assets-colors': './src/assets/Colors.ts',
          '@rootStore': './src/RootStore.ts',
          '@getTexts': './src/i18n/manageLocales.ts',
          '@services': './src/services',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
