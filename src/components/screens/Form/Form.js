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

export default function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = React.useState('');

  const storeData = async () => {
    try {
      await AsyncStorage.setItem('email', email);
      await AsyncStorage.setItem('pass', password);
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
      <Button color="#2196F3" title="SignUp" onPress={storeData} />
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
