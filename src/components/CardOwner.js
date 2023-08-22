import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {fontSize, normalize} from '../responsive/responsive';
import {getInitials} from '../function/getinitialname';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

export default function CardOwner({name = '-', firstname='-', lastname='-',fav}) {
  const initials = getInitials(name);

  return (
    <View style={{marginTop: normalize(30)}}>
      <Text
        style={styles.title}>
        Owners Card
      </Text>
      <View style={styles.cardContainer}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={styles.circle}>
            <Text style={styles.initial}>{initials}</Text>
          </View>
          <View style={{marginLeft: normalize(25)}}>
            <View style={{marginVertical: normalize(5)}}>
              <Text style={styles.titleName}>First Name</Text>
              <Text style={styles.name}>{firstname} </Text>
            </View>
            <View style={{marginVertical: normalize(5)}}>
              <Text style={styles.titleName}>Last Name</Text>
              <Text style={styles.name}>{lastname} </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={{padding: normalize(10)}}>
          {fav == false ? (
            <Icon name="star-o" size={fontSize(28)} color={'#DCDCDC'} />
          ):(
          <Icon name="star" size={fontSize(28)} color={'#7C42FF'} />
          )}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    height: normalize(140),
    width: normalize(327),
    borderWidth: 1,
    borderColor: '#FFFFFF80',
    borderRadius: 12,
    backgroundColor:
      'background: linear-gradient(92.46deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%),linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5))',
    justifyContent: 'space-between',
    paddingHorizontal: normalize(15),
  },
  title:{
    fontFamily: 'Circular',
    fontSize: fontSize(14),
    fontWeight: '500',
    lineHeight: normalize(20),
    color: '#A1AFC3',
    marginVertical: normalize(10),
  },
  circle: {
    width: normalize(56),
    height: normalize(56),
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  initial: {
    fontFamily: 'SFPro',
    fontSize: fontSize(20),
    fontWeight: '600',
    color: '#fff',
    letterSpacing: 1,
  },
  titleName: {
    fontFamily: 'Circular',
    fontSize: fontSize(14),
    fontWeight: '500',
    lineHeight: normalize(22),
    letterSpacing: 1,
    marginHorizontal: normalize(10),
    color: '#A1AFC3',
  },
  name: {
    fontFamily: 'Circular',
    fontSize: fontSize(14),
    fontWeight: '500',
    lineHeight: normalize(22),
    letterSpacing: 1,
    marginHorizontal: normalize(10),
  },
});
