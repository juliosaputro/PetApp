import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {URL} from '@env';
import Modal from 'react-native-modal'
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, ScrollView, TextInput, Button, StyleSheet} from 'react-native'
import Header from '../components/Header'
import CardOwner from '../components/CardOwner'
import { updateUserReducer } from '../reducers/userReducer';
import CardCat from '../components/CardCat'
import ButtonPrimary from '../components/ButtonPrimary'
import {useNavigation, useRoute} from '@react-navigation/native'
import { calculateAge } from '../function/calculateAge';
import { fontSize, normalize } from '../responsive/responsive';
import ModalAddMaster from '../components/ModalAddMaster';

export default function OwnerDetail() {
  const navigation = useNavigation()
  const route = useRoute();
  const {idMaster} = route.params

  const [mdl, setMdl] = useState(false)

  const dispatch = useDispatch()
  const token = useSelector(s => s.tokenReducer);
  const dataUser = useSelector(s => s.userReducer.value)
  const dataPets = useSelector(s => s.userReducer.value.pets)

  const getMaster = async () => {
    try {
      const response = await axios.get(`${URL}/master/${idMaster}`, {
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      });
      console.log(response.data);
      dispatch(updateUserReducer(response.data));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(()=>{
    getMaster()
  },[])



  return (
    <View style={{flex:1, alignItems:'center'}}>
        <Header key={dataUser.id} name={`${dataUser.firstName} ${dataUser.lastName}`} onPress={()=>navigation.goBack()}/>
      <CardOwner name={`${dataUser.firstName} ${dataUser.lastName}`} firstname={dataUser.firstName} lastname={dataUser.lastName} fav={dataUser.favorites}/>
      <View style={{width:'100%',marginTop: normalize(30),paddingHorizontal:normalize(24)}}>
      <Text style={{
           fontFamily: 'Circular',
           fontSize: fontSize(14),
           fontWeight: '500',
           lineHeight: normalize(20),
           color: '#A1AFC3',
           marginVertical: normalize(10),
      }}>Cats</Text>
      {dataPets.length > 0 ? (

      <ScrollView contentContainerStyle={{height:normalize(250)}}>
      {dataPets.map((item)=>{
        const age = calculateAge(item.dob)
        return(
        <CardCat key={item.id} name={item.name} year={age.years} month={age.months}/>
        )
      })}
    
      </ScrollView>
      ):(<></>)}
      </View>
      <View style={{position:'absolute', bottom:10}}>
      <ButtonPrimary title='Make Master' onPress={()=>setMdl(true)}/>
      </View>
      <Modal
      isVisible={mdl}
      onBackdropPress={()=>setMdl(false)}
      onDismiss={() => setMdl(false)}
      backdropColor="transparent"
      style={{justifyContent: 'center'}}
      >
        <ModalAddMaster/>
      </Modal>
    </View>
  )
}
