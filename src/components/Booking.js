import {View, Text, ScrollView, Button} from 'react-native';
import React from 'react';
import Header from './Header';
import Body from './Body';
import Book from './Book';
import Header2 from './Header3';
import Table from './Table';
import Details from './Details';

export default function Booking({navigation}) {
  return (
    <View>
      <ScrollView
        contentContainerStyle={{
          marginBottom: 20,
          backgroundColor: 'white',
        }}>
        <Button
          title="Go to Details"
          onPress={() =>
            navigation.navigate('count', {
              itemId: 86,
              otherParam: 'anything you want here',
            })
          }
        />
        <Header2 />
        <Header />
        <Body />
        <Body />
        <Body />
        <Body />
        <Book />
        <Details />
        <Table />
      </ScrollView>
    </View>
  );
}
