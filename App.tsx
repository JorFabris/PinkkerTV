import React from 'react';
import { LogBox, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from '@navigation/StackNavigation';

LogBox.ignoreAllLogs();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'light-content'} />
      <StackNavigation />
    </NavigationContainer>
  );
};

export default App;
