//import liraries

import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Circle from './Circle';

// create a component
const Body = () => {
  const [currentDate, setCurrentDate] = useState('');
  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    setCurrentDate(
      date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec,
    );
  }, []);
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={styles.text1}>Room name</Text>
        <Circle mainStyle={{marginRight: 20}} />
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{marginLeft: 30}}>
          {currentDate} <Ionicons name="arrow-forward-outline" size={14} />
          -3:00PM
        </Text>
        <Text style={styles.text2}>Duration: 4 h</Text>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    marginLeft: 17,
    backgroundColor: '#F5F6F4',
    borderRadius: 20,
    width: 377,
    height: 104,
    marginTop: 16,
  },
  text1: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 28,
    color: '#272627',
    marginLeft: 30,
  },
  text2: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 28,
    color: '#565556',
    marginLeft: 50,
    alignItems: 'flex-end',
  },
});

//make this component available to the app
export default Body;
