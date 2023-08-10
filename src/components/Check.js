import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TextInput,
} from 'react-native';
import CustomTextInput from './TextInput';
import {useTheme} from './config/theme';
import Button from './Button';
import {Left} from '../assests';
const Check = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [active, setActive] = useState(true);
  const colors = useTheme();

  const savePressed = () => {
    console.log('Save pressed');
  };
  return (
    <View style={styles.centeredView}>
      <Modal
        style={{justifyContent: 'flex-end', margin: 0}}
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View
              style={{
                width: '100%',
                height: 28,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                borderBottomWidth: 1,
                borderColor: '#F5F6F4',
                marginBottom: 20,
              }}>
              <Text style={{marginRight: 30, height: 28, width: 66}}>
                Add Link
              </Text>
              <Text style={{height: 28, width: 120}}>Choose on map</Text>
            </View>
            <View>
              <CustomTextInput
                placeholder={'Place Link Here'}
                mainStyle={{
                  marginBottom: 16,
                  height: 56,
                  width: 354,
                  borderColor: 'rgba(233, 234, 233, 1)',
                  backgroundColor: 'rgba(250, 250, 250, 1)',
                }}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginBottom: 15,
                position: 'absolute',
                bottom: 20,
                left: 0,
                right: 0,
              }}>
              <Button
                buttonStyle={{flex: 0.42}}
                title={`Back`}
                onPress={() => setModalVisible(!modalVisible)}
              />
              <Button
                buttonStyle={{flex: 0.42, backgroundColor: colors.appPrimary}}
                title={`Save`}
                textStyles={{color: colors.whiteBackground}}
                onPress={savePressed}
              />
            </View>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    borderRadius: 25,
    padding: 35,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '100%',
    height: 540,
  },

  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default Check;
