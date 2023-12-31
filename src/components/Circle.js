//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// create a component
const Circle = ({mainStyle}) => {
  return (
    <View style={[styles.container, mainStyle]}>
      <Ionicons name="ellipsis-horizontal-outline" size={20} color={'black'} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    width: 48,
    height: 48,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

//make this component available to the app
export default Circle;
<ion-icon name="ellipsis-horizontal-outline"></ion-icon>;
