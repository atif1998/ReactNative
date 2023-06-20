import React from 'react';
import {Text} from 'react-native-elements';
import Setting from './src/Screens/Setting';
import HomeScreen from './src/Screens/HomeScreen';
import ThirdScreen from './src/Screens/ThirdScreen';
import Card from './src/components/Top';
import {ScrollView} from 'react-native';
import Count from './src/components/Count';
import Drawer from './src/components/Drawer';
import Header from './src/components/Header';
import Body from './src/components/Body';
import Button from './src/components/Button';

export default function App() {
  return (
    <ScrollView
      contentContainerStyle={{
        marginBottom: 20,
        backgroundColor: 'white',
      }}>
      <Header />
      <Body />
      <Body />
      <Body />
      <Body />
      <Button />
    </ScrollView>
  );
}
