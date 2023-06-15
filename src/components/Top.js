import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Setting from '../Screens/Setting';
import HomeScreen from '../Screens/HomeScreen';

const Tab = createMaterialTopTabNavigator();

function Top() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={Setting} />
    </Tab.Navigator>
  );
}
export default Top;
