import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Button,
  AsyncStorage,
} from 'react-native';
import React, {useState} from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = React.useState('');

  const reterievDate = async () => {
    try {
      const data = await AsyncStorage.getItem('email');
      const data2 = await AsyncStorage.getItem('pass');
      if (data == email && data2 == password) {
        console.log('Login succesfull');
      } else {
        console.log('invalid');
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Enter Email"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Enter Password"
      />
      <Button color="#2196F3" title="SignUp" onPress={reterievDate} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
