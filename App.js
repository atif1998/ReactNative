import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import Top from './src/components/Top';
import Setting from './src/Screens/Setting';
import HomeScreen from './src/Screens/HomeScreen';
import ThirdScreen from './src/Screens/ThirdScreen';

export default function App() {
  return (
    <View>
      <Setting />
      <HomeScreen />
      <ThirdScreen />
    </View>
  );
}
