import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/AuthScreens/LoginScreen';
import SplashScreen from '../screens/AuthScreens/SplashScreen';
import RegisterScreen from '../screens/AuthScreens/RegisterScreen';
import VerifyCode from '../screens/AuthScreens/VerifyCode';
import ForgotPass from '../screens/AuthScreens/ForgotPass';
import ResetPass from '../screens/AuthScreens/ResetPass';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Verify" component={VerifyCode} />
      <Stack.Screen name="ForgotPass" component={ForgotPass} />
      <Stack.Screen name="ResetPass" component={ResetPass} />
    </Stack.Navigator>
  );
}
