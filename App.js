import 'react-native-gesture-handler';
import React from 'react';
import Setting from './src/Screens/Setting';
import HomeScreen from './src/Screens/HomeScreen';
import ThirdScreen from './src/Screens/ThirdScreen';
import Card from './src/components/Top';
// import {ScrollView} from 'react-native-gesture-handler';
import {ScrollView} from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={{marginBottom: 20}}>
      <Setting />
      <HomeScreen />
      <ThirdScreen />
      <Card />
    </ScrollView>
  );
}
