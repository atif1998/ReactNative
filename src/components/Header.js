//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Left, Notification, Email, Reason, Calendar} from '../assests';
import CustomTextInput from './TextInput';

// create a component
const Header = () => {
  return (
    <View>
      <View style={styles.container}>
        <Left />
        <Text style={styles.text}>Add Visitors</Text>
      </View>
      <View style={{margin: 30}}>
        <CustomTextInput
          placeholder={'Name'}
          mainStyle={{
            marginBottom: 16,
            height: 56,
            width: 342,
            borderColor: 'rgba(233, 234, 233, 1)',
            backgroundColor: 'rgba(250, 250, 250, 1)',
          }}
        />
        <CustomTextInput
          placeholder={'Email'}
          mainStyle={{
            marginBottom: 16,
            height: 56,
            width: 342,
            borderColor: 'rgba(233, 234, 233, 1)',
            backgroundColor: 'rgba(250, 250, 250, 1)',
          }}
          icon={<Email />}
        />
        <CustomTextInput
          placeholder={'Visit Duration max 14 Hours'}
          mainStyle={{
            marginBottom: 16,
            height: 56,
            width: 342,
            borderColor: 'rgba(233, 234, 233, 1)',
            backgroundColor: 'rgba(250, 250, 250, 1)',
          }}
          icon={<Calendar />}
        />
        <CustomTextInput
          placeholder={'Custom'}
          mainStyle={{
            marginBottom: 16,
            height: 56,
            width: 342,
            borderColor: 'rgba(233, 234, 233, 1)',
            backgroundColor: 'rgba(250, 250, 250, 1)',
          }}
        />
        <CustomTextInput
          placeholder={'Add Custom Visit Reason'}
          mainStyle={{
            marginBottom: 16,
            height: 56,
            width: 342,
            borderColor: 'rgba(233, 234, 233, 1)',
            backgroundColor: 'rgba(250, 250, 250, 1)',
          }}
          icon={<Reason />}
        />
      </View>
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
