import React from 'react';
import {StyleSheet, Button, View, TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search  Hotels , Taxis..."></TextInput>
      <View
        style={{
          borderWidth: 1,
          borderRadius: 8,
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          flex: 0.15,
          right: 14,
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
        }}>
        <Ionicons name="search" size={20} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center'},
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    flex: 1,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  icon: {},
});
