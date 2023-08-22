import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {fontSize, normalize} from '../responsive/responsive';
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal'
import DropDownPicker from 'react-native-dropdown-picker';
import CustomDropdown from './CustomDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilterReducer } from '../reducers/filterReducer';

export default function FilterContainer() {
    const options = ['Name', 'Number'];
    const dispatch = useDispatch()

    const handleOptionSelect = (option) => {
        console.log('Selected:', option);
        dispatch(updateFilterReducer(option))
      };
      
      const dataMaster = useSelector(s => s.masterReducer.value);

      const [dataByFilter, setDataByFilter] = useState([])
      const [dataByNumber, setDataByNumber] = useState([])
      
      

      

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: normalize(24),
      }}>
      <View>
        <Text
          style={{
            fontFamily: 'Circular',
            fontSize: fontSize(14),
            fontWeight: '400',
            lineHeight: normalize(20),
            color: '#A1AFC3',
          }}>
          Owners List
        </Text>
      </View>
      <CustomDropdown options={options} onSelect={handleOptionSelect} />
    </View>
  );
}

