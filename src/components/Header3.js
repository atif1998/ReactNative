//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Message, Notification} from '../assests';
// create a component
const Header2 = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="reorder-three-outline" size={24} />
      <View style={styles.notify}>
        <Message height={24} width={24} />
        <Notification height={24} width={24} />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 68,
    marginLeft: 24,
  },
  notify: {
    flexDirection: 'row',
    width: 70,
    justifyContent: 'space-between',
    marginRight: 24,
  },
});

//make this component available to the app
export default Header2;
<ion-icon name="reorder-three-outline"></ion-icon>;
