import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import Header from './Header';
import Body from './Body';
import Button from './Button';
import Book from './Book';
import Keyboard from './Keyboard';
import Header2 from './Header3';
export default function Booking() {
  return (
    <View>
      <ScrollView
        contentContainerStyle={{
          marginBottom: 20,
          backgroundColor: 'white',
        }}>
        <Header2 />
        <Header />
        <Body />
        <Body />
        <Body />
        <Body />
        <Book />
        <Button />
      </ScrollView>
    </View>
  );
}
