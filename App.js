import React from 'react';
import Setting from './src/Screens/Setting';
import HomeScreen from './src/Screens/HomeScreen';
import ThirdScreen from './src/Screens/ThirdScreen';
import Card from './src/components/Top';
import {ScrollView} from 'react-native';
import Count from './src/components/Count';
import MyComponent from './src/components/Drawer';
import DrawerExample from './src/components/Drawer';
import Drawer from './src/components/Drawer';

export default function App() {
  return (
    <ScrollView contentContainerStyle={{marginBottom: 20}}>
      <Setting />
      <HomeScreen />
      <ThirdScreen />
      <Count />
      <Card />
      <Drawer />
    </ScrollView>
  );
}
