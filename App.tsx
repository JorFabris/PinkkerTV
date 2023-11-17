import React from 'react';
import { LogBox, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from '@navigation/StackNavigation';
import GoLiveNavigation from '@navigation/GoLiveNavigation/GoLiveNavigation';

LogBox.ignoreAllLogs();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'light-content'} />
      <StackNavigation />
      {/* <GoLiveNavigation /> */}
    </NavigationContainer>
  );
};

export default App;
