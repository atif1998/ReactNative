//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Left} from '../assests';

// create a component
const Book = () => {
  return (
    <View>
      <View style={styles.container}>
        <Left width={24} height={24} />
        <Text style={styles.text}>Book a room</Text>
      </View>
      <View style={{paddingHorizontal: 27}}>
        <Text
          style={{
            color: '#7C3F92',
            fontSize: 18,
            fontFamily: 'DM Sans',
            marginTop: 20,
          }}>
          Meeting room name
        </Text>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginLeft: 25,
    marginRight: 210,
    marginTop: 20,
  },
  text: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontSize: 24,
    lineHeight: 31,
    color: 'black',
  },
  text1: {
    marginLeft: 17,
    marginTop: 10,
    fontFamily: 'DM Sans',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 28,
    color: '#000000',
  },
});

//make this component available to the app
export default Book;
