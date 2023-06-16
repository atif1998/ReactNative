import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Setting = () => {
  return (
    <View>
      <View style={{marginTop: 20, marginBottom: 20}}>
        <Ionicons name="reorder-four-sharp" size={40} />
      </View>

      <View style={styles.container}>
        <View>
          <Ionicons name="airplane-sharp" size={40} />
        </View>
        <View>
          <Text style={{fontSize: 30}}>Airoplane mode</Text>
        </View>
        <View style={styles.input}>
          <Ionicons name="wifi-outline" size={40} />
        </View>
      </View>
      <Ionicons name="bluetooth-sharp" size={40} />
      <Text style={{fontSize: 30}}>bluetooth</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 40,
  },
  input: {
    flex: 1,
    alignItems: 'flex-end',
  },
});

export default Setting;
<ion-icon name="menu-sharp"></ion-icon>;
