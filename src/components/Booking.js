import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import Header from './Header';
import Body from './Body';
import Button from './Button';
import Book from './Book';
export default function Booking() {
  return (
    <View>
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
        <Book />
        <Button />
      </ScrollView>
    </View>
  );
}