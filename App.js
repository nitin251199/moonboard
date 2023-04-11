import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { navigationRef } from './src/navigation/NavigationRef';
import RootNavigator from './src/navigation/RootNavigator';
import SplashScreen from 'react-native-splash-screen';


const App = () => {
  return (
    <NavigationContainer ref={navigationRef} onReady={()=> SplashScreen.hide()}>
      <RootNavigator />
    </NavigationContainer>
  );
}

export default App

