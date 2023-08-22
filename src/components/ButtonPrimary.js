import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import {fontSize, normalize} from '../responsive/responsive';

export default function ButtonPrimary({title = '', onPress}) {
  return (
    <Button
      mode="contained"
      style={styles.button}
      contentStyle={{width: normalize(300)}}
      onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </Button>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#36A388',
    padding: normalize(6),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginHorizontal: normalize(30),
  },
  title: {
    fontSize: fontSize(18),
    fontWeight: '600',
    color: '#FFFFFF',
    fontFamily: 'Circular',
  },
});
