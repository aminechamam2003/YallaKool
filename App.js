import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LoginProvider from './frontend/LoginPage/context/LoginProvider';
import MainNavigator from './frontend/LoginPage/MainNavigator';

export default function App() {
  return (
    <LoginProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </LoginProvider>
  );
}
