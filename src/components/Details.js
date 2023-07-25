import React from 'react';
import {View, Text, Image} from 'react-native';
import {StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Details = () => {
  const image =
    'https://www.shutterstock.com/shutterstock/photos/2019701981/display_1500/stock-vector-online-shopping-store-on-website-and-mobile-phone-design-smart-business-marketing-concept-2019701981.jpg';
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Image source={{uri: image}} style={styles.tinyLogo} />
      </View>
      <View style={styles.icon}>
        <Ionicons name="checkmark" size={17} color={'#8D55A2'} />
        <Ionicons name="close" size={12} color={'red'} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  tinyLogo: {
    borderRadius: 20,
    width: 45,
    height: 45,
    overflow: 'hidden',
  },
  icon: {
    width: 30,
    display: 'flex',
    flexDirection: 'row',
  },
  circle: {
    marginLeft: 30,
    borderWidth: 1,
    width: 48,
    height: 48,
    borderRadius: 30,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Details;
