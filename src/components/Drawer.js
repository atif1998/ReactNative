import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import SecondScreen from '../Screens/SecondScreen';
import Setting from '../Screens/Setting';
import Loader from '../Screens/Loader';
import {Text, View} from 'react-native';

function Here() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
}

function Here2() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home2!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="1" component={Here} />
      <Tab.Screen name="2" component={Setting} />
    </Tab.Navigator>
  );
};
export default MyTabs;
