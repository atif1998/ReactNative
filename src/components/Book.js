import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';

export default function Book() {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Meeting title" style={{marginLeft: 16}} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 56,
    borderRadius: 8,
    marginTop: 10,
    marginLeft: 24,
    marginRight: 24,
    backgroundColor: '#E9EAE9',
  },
});
