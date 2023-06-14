import React from 'react';
import {View} from 'react-native';
import Form from './src/components/screens/Form/Form';
import Login from './src/components/screens/Form/Login';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/Screens/HomeScreen';
import SecondScreen from './src/Screens/SecondScreen';
import ThirdScreen from './src/Screens/ThirdScreen';

const stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <stack.Screen
          name="Second"
          component={SecondScreen}
          options={{title: 'Second screen'}}
        />
      </stack.Navigator>
      <stack.Screen
        name="Third"
        component={ThirdScreen}
        options={{headerShown: false}}
      />
    </NavigationContainer>
    // <View>
    //   <Form/>
    //   <Login/>
    // </View>
  );
};

export default App;
