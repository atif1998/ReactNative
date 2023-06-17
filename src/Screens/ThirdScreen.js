import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
const icons = [
  {
    name: 'train',
    pic: <Ionicons name="train-outline" size={40} />,
  },
  {
    name: 'flight',
    pic: <Ionicons name="bed-outline" size={40} />,
  },
  {
    name: 'Hotel',
    pic: <Ionicons name="airplane-sharp" size={40} />,
  },
  {
    name: 'MORE',
    pic: <Ionicons name="apps-outline" size={40} />,
  },
];

export default function ThirdScreen() {
  return (
    <View
      style={{
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
      }}>
      {icons.map((item, key) => {
        return (
          <View style={styles.container}>
            <Text>{item.pic}</Text>
            <Text style={{marginTop: 5}}>{item.name}</Text>
          </View>
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    width: 45,
    borderRadius: 10,
  },
});
