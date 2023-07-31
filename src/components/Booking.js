import {View, Text, ScrollView, Button} from 'react-native';
import React, {useEffect} from 'react';
import Header from './Header';
import Body from './Body';
import Book from './Book';
import Header2 from './Header3';
import Table from './Table';
import Details from './Details';
import {Plus} from '../assests';

export default function Booking({navigation}) {
  useEffect(() => {
    // Function to navigate to the NextScreen after 2 seconds
    const navigateToNextScreen = () => {
      navigation.navigate('count'); // Replace 'NextScreen' with the name of your target screen.
    };

    // Wait for 2 seconds and then navigate
    const timer = setTimeout(navigateToNextScreen, 2000);

    // Clear the timer when the component unmounts to avoid any memory leaks
    return () => clearTimeout(timer);
  }, [navigation]);
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
        <Plus />
      </ScrollView>
    </View>
  );
}
