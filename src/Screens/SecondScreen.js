import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {StackActions} from '@react-navigation/native';

export default function SecondScreen({navigation, route}) {
  let language = route.params.language;
  let greeting = language === 'french' ? 'Bonjour' : 'Hello';
  return (
    <View style={styles.container}>
      <Text>{greeting}</Text>
      <Button
        title="Go to Third Screen"
        onPress={() => navigation.navigate('Third')}
      />
      <Button
        title="Go to Third Screen with Replace"
        onPress={() => {
          navigation.dispatch(StackActions.replace('Third'));
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
