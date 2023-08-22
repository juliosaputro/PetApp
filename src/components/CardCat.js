import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {fontSize, normalize} from '../responsive/responsive';
import {getInitials} from '../function/getinitialname';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function CardCat({name = 'Blackly', year = '', month=''}) {
  return (
    <View style={{marginVertical:normalize(7)}} >
      <TouchableOpacity style={styles.cardContainer}>
        <View
          style={{
            justifyContent: 'center',
          }}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.age}>Age : {year} years {month} month</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View>
            <Icon name="angle-right" size={fontSize(34)} color={'#DCDCDC'} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
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
  },
  name: {
    fontFamily: 'Circular',
    fontSize: fontSize(14),
    fontWeight: '500',
    lineHeight: normalize(17, 5),
    letterSpacing: 1,
    marginHorizontal: normalize(10),
  },
  age: {
    fontFamily: 'Circular',
    fontSize: fontSize(12),
    fontWeight: '500',
    letterSpacing: 1,
    marginHorizontal: normalize(10),
    lineHeight: normalize(22),
    color: '#A1AFC3',
  },
});
