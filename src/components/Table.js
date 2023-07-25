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

const Table = () => {
  const [modalVisible, setModalVisible] = useState(false);
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
            <Text style={{color: '#272627', fontSize: 28}}>ADD VISITOR</Text>
            <TextInput
              placeholder="First Name"
              style={{
                height: 56,
                margin: 12,
                borderWidth: 1,
                padding: 10,
                width: 342,
                borderRadius: 10,
                backgroundColor: '#E9EAE9',
              }}
            />
            <TextInput
              placeholder="Last Name"
              style={{
                height: 56,
                margin: 12,
                borderWidth: 1,
                padding: 10,
                width: 342,
                borderRadius: 10,
                backgroundColor: '#E9EAE9',
              }}
            />
            <TextInput
              placeholder="Email"
              style={{
                height: 56,
                margin: 12,
                borderWidth: 1,
                padding: 10,
                width: 342,
                borderRadius: 10,
                backgroundColor: '#E9EAE9',
              }}
            />
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
              }}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>BACK</Text>
              </Pressable>
              <Pressable
                style={{
                  borderRadius: 20,
                  padding: 10,
                  elevation: 2,
                  color: '#8D55A2',
                }}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>ADD</Text>
              </Pressable>
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
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default Table;
