//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Menu, Message, Notification} from '../assests';
// create a component
const Header2 = () => {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Menu height={24} width={24} />
        <View style={styles.notify}>
          <Message height={24} width={24} />
          <Notification height={24} width={24} />
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  main: {borderBottomWidth: 1, borderColor: '#F5F6F4'},
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
