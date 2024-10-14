import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { NativeWindStyleSheet } from "nativewind";

import { NavigationContainer } from '@react-navigation/native';

import Index from './src/Index';
import * as Font from 'expo-font';

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {

  const [fontsLoaded, setFontsLoaded] = React.useState(false);
  React.useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'ChakraPetch': require('./assets/fonts/ChakraPetch-Regular.ttf'),
      });
      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null;
  }


  return (
    <NavigationContainer>
      <Index />
    </NavigationContainer>
  );
}

