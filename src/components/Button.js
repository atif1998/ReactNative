//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
const Button = ({naviagtion}) => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: '#8D55A2',
        }}>
        Button
      </Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    width: 377,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#8D55A2',
    height: 40,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
});

//make this component available to the app
export default Button;
