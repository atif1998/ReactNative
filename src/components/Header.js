//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Left, Notification} from '../assests';

// create a component
const Header = () => {
  return (
    <View>
      <View style={styles.container}>
        <Left />
        <Text style={styles.text}>My Bookings</Text>
      </View>
      <Text style={styles.text1}>Credits lefts: 24</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
export default Header;
