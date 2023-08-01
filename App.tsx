import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import StackNavigation from './src/navigation/StackNavigation';
import { StatusBar } from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'light-content'} />
      <StackNavigation />
    </NavigationContainer>
  );
};

export default App;
