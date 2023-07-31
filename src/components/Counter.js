//import liraries
import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

// create a component
const Counter = ({route}) => {
  const itemId = route?.param?.itemId;
  const otherParam = route?.param?.otherParam;
  const [login, setLogin] = useState({
    name: '',
    email: '',
    password: '',
  });
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <Text>{itemId}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <TextInput style={styles.input} value={login.name} />
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
