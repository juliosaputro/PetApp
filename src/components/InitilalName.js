import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {fontSize, normalize} from '../responsive/responsive';
import {getInitials} from '../function/getinitialname';

export default function InitilalName({name = 'John Lennon'}) {
  const initials = getInitials(name);

  return (
    <View style={styles.container}>
      <View
        style={styles.circle}>
        <Text
          style={styles.initial}>
          {initials}
        </Text>
      </View>
      <View style={{marginLeft: normalize(16)}}>
        <Text
          style={styles.name}>
          Master : {name}{' '}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: normalize(40),
    marginVertical: normalize(60),
  },
  circle:{
    width: normalize(40),
          height: normalize(40),
          borderWidth: 1,
          borderColor: '#36A388',
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
  },
  initial:{
    fontFamily: 'SFPro',
    fontSize: fontSize(15),
    fontWeight: '500',
    lineHeight: normalize(17, 5),
    color: '#36A388',
  },
  name:{
    fontFamily: 'Circular',
            fontSize: fontSize(14),
            fontWeight: '500',
            lineHeight: normalize(17, 5),
            letterSpacing: 1,
  }
});
