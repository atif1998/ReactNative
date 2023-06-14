//import liraries
import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

// create a component
const Counter = () => {
  const [login, setLogin] = useState({
    name: '',
    email: '',
    password: '',
  });
  return (
    <View style={{backgroundColor: 'black', flex: 1}}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={login.name}
      />
      <Text>Counter</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

//make this component available to the app
export default Counter;
