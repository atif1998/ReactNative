import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Booking from './src/components/Booking';
import Counter from './src/components/Counter';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Booking}
          options={{headerShown: false}}
        />
        <Stack.Screen name="count" component={Counter} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
