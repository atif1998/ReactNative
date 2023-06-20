import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Setting = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Ionicons name="reorder-three-outline" size={40} />
        <Text style={{fontSize: 30, marginLeft: 10}}>SOFT UI</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={{marginRight: 10}}>
          <Ionicons name="notifications" size={40} color={'orange'} />
        </View>

        <Ionicons name="logo-instagram" size={40} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default Setting;
