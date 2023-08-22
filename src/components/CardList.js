import React from 'react';
import axios from 'axios'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {fontSize, normalize} from '../responsive/responsive';
import {getInitials} from '../function/getinitialname';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

export default function CardList({name = 'John Lennon', fav, onPress, id}) {
  const initials = getInitials(name);

  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => navigation.navigate('OwnerDetail',{idMaster:id})}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={styles.circle}>
          <Text style={styles.initial}>{initials}</Text>
        </View>
        <Text style={styles.name}>{name} </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity style={{padding: normalize(10)}} onPress={onPress}>
          {fav == false ? (
            <Icon name="star-o" size={fontSize(24)} color={'#DCDCDC'} />
          ):(
          <Icon name="star" size={fontSize(24)} color={'#7C42FF'} />
          )}
        </TouchableOpacity>
        <View>
          <Icon name="angle-right" size={fontSize(34)} color={'#DCDCDC'} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    height: normalize(64),
    width: normalize(327),
    borderWidth: 1,
    borderColor: '#FFFFFF80',
    borderRadius: 12,
    backgroundColor:
      'background: linear-gradient(92.46deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%),linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5))',
    justifyContent: 'space-between',
    paddingHorizontal: normalize(15),
    marginVertical:normalize(7)
  },
  circle: {
    width: normalize(40),
    height: normalize(40),
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  initial: {
    fontFamily: 'SFPro',
    fontSize: fontSize(16),
    fontWeight: '600',
    lineHeight: normalize(17, 5),
    color: '#fff',
    letterSpacing: 1,
  },
  name: {
    fontFamily: 'Circular',
    fontSize: fontSize(14),
    fontWeight: '500',
    lineHeight: normalize(17, 5),
    letterSpacing: 1,
    marginHorizontal: normalize(10),
  },
});
