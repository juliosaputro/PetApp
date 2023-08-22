import React, {useState} from 'react';
import axios from 'axios';
import {URL} from '@env';
import Modal from 'react-native-modal';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome'
import { fontSize, normalize } from '../responsive/responsive';

export default function ModalAddMaster() {
  const navigation = useNavigation();

  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');

  const [mdlSucces, setMdlSuccess] = useState(false)
  const [mdlError, setMdlError] = useState(false)

  const token = useSelector(s => s.tokenReducer);

  const handleSubmit = async () => {
    const data = {
      firstName: first,
      lastName: last,
      description: 'user',
      favorites: false,
    };
    try {
      const response = await axios.post(`${URL}/master`, data, {
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      });
      console.log('Response:', response.data);
      setMdlSuccess(true)
      setTimeout(() => {
        navigation.navigate('OwnerList');
      }, 1000);
    } catch (error) {
      console.error('Error:', error);
      setMdlError(true)
      setTimeout(() => {
        navigation.navigate('OwnerList');
      }, 1000);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={first}
        onChangeText={setFirst}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={last}
        onChangeText={setLast}
      />
      <Button title="Add Master" onPress={handleSubmit} />
      <Modal
      isVisible={mdlSucces}
      onBackdropPress={()=>setMdlSuccess(false)}
      onDismiss={() => setMdlSuccess(false)}
      backdropColor="transparent"
      style={{justifyContent: 'center'}}
      >
        <View style={styles.container}>
          <Icon name="check-circle" size={fontSize(83)} color={'#539165'} />
          <Text style={styles.title}>Success Add Master</Text>
        </View>
      </Modal>
      <Modal
      isVisible={mdlError}
      onBackdropPress={()=>setMdlError(false)}
      onDismiss={() => setMdlError(false)}
      backdropColor="transparent"
      style={{justifyContent: 'center'}}
      >
        <View style={styles.container}>
          <Icon name="times-circle" size={fontSize(83)} color={'#C70039'} />
          <Text style={styles.title}>Error Add Master</Text>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  title:{
    fontFamily: 'Circular',
    fontSize: fontSize(24),
    fontWeight: '500',
    lineHeight: normalize(20),
    color: '#A1AFC3',
    marginVertical: normalize(10),
  },
});
