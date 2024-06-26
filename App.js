import React from 'react';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes/routes';

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <StatusBar 
        backgroundColor="#003399" barStyle="light-content"
      />
      <Routes/>
    </NavigationContainer>
  );
}

