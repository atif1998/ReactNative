//import liraries
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ToggleSwitch from 'toggle-switch-react-native';

// create a component
const Setting = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={{backgroundColor: 'red'}}>
          <Ionicons name="airplane-sharp" size={40} />
        </View>
        <View style={{backgroundColor: 'black'}}>
          <Text style={{fontSize: 30}}>Airoplane mode</Text>
        </View>
        <View style={styles.input}>
          <Ionicons name="wifi-outline" size={40} />
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 40,
  },
  input: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'flex-end',
  },
});

//make this component available to the app
export default Setting;
<ion-icon name="toggle-outline"></ion-icon>;
<ion-icon name="wifi-outline"></ion-icon>;
