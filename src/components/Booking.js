import {View, Text, ScrollView, Button} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import React, {useEffect} from 'react';
import Header from './Header';
import Body from './Body';
import Book from './Book';
import Header2 from './Header3';
import Table from './Table';
import Details from './Details';
import {Plus} from '../assests';
import Check from './Check';

export default function Booking({navigation}) {
  const isFocused = useIsFocused();

  // useEffect(() => {
  //   // Function to navigate to the NextScreen after 2 seconds
  //   const navigateToNextScreen = () => {
  //     navigation.navigate('count'); // Replace 'NextScreen' with the name of your target screen.
  //   };
  //   // Wait for 2 seconds and then navigate
  //   const timer = setTimeout(navigateToNextScreen, 2000);
  // }, [navigation]);
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
        <Details />
        <Table />
        <Check />
        <Plus />
        <Button
          title="Go to Details"
          onPress={() =>
            navigation.navigate('count', {
              itemId: 86,
              otherParam: 'anything you want here',
            })
          }
        />
      </ScrollView>
    </View>
  );
}
