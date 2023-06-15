import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import Top from './src/components/Top';

export default function App() {
  return (
    <NavigationContainer>
      <Top />
    </NavigationContainer>
  );
}
