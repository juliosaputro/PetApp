import React from 'react'
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native'
import {useNavigation} from'@react-navigation/native'
import { fontSize, normalize } from '../responsive/responsive';
import Icon from 'react-native-vector-icons/FontAwesome'
import InitilalName from './InitilalName';

export default function Header({onPress, name=''}) {
    const navigation = useNavigation()
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.back}
          onPress={onPress}>
          <Icon name="arrow-left" size={fontSize(18)} color={'#474747'} />
        </TouchableOpacity>
        <View
          style={styles.title}>
         <InitilalName name={name}/>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      height: normalize(62),
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: normalize(10),
    },
    title: {
      flex: 1,
      alignContent: 'center',
      marginHorizontal: normalize(8),
      marginRight: normalize(32),
    },
    back:{
      width: normalize(32),
      height: normalize(32),
      alignItems: 'center',
      justifyContent: 'center',
    }
  });
