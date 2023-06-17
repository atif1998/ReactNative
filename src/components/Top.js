//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {img1} from '../assests/images/efiletower.jpg';
import Ionicons from 'react-native-vector-icons/Ionicons';

const cards = [
  {
    name: 'Best Deal',
    // image: img1,
    image: require('../assests/images/efiletower.jpg'),
    info: 'A graet to stay in france',
    location: 'Paris,France',
    star: 4.7,
  },
  {
    name: 'Best Deal',
    image: require('../assests/images/efiletower.jpg'),
    info: 'A graet to stay in france',
    location: 'Paris,France',
    star: 4.7,
  },
  {
    name: 'Best Deal',
    image: require('../assests/images/efiletower.jpg'),
    info: 'A graet to stay in france',
    location: 'Paris,France',
    star: 4.7,
  },
];
// create a component
const Card = () => {
  return (
    <View>
      {cards.map((items, key) => (
        <View style={styles.container}>
          <Text>{items.key}</Text>
          <Image
            source={items.image}
            style={{height: 150, width: 350, marginLeft: 10, borderRadius: 8}}
          />

          <Text style={{marginLeft: 10}}>{items.name}</Text>
          <Text style={{marginLeft: 10}}>{items.info}</Text>
          <View style={{flexDirection: 'row', marginLeft: 5}}>
            <Ionicons name="location" size={20} />
            <Text style={{marginLeft: 10}}>{items.location}</Text>
            <Ionicons name="star" size={20} color={'red'} />
            <Text>{items.star}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    marginLeft: 13,
    marginTop: 20,
    borderWidth: 1,
    width: 370,
    borderRadius: 10,
  },
});

//make this component available to the app
export default Card;
