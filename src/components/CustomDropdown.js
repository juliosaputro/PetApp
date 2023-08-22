import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { fontSize, normalize } from '../responsive/responsive';
import Icon from 'react-native-vector-icons/FontAwesome';

const CustomDropdown = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [selected, setSelected] = useState('Name')

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    onSelect(option);
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <View>
      <TouchableOpacity style={styles.dropdownButton} onPress={toggleDropdown}>
      <Text
          style={styles.sortText}>
          Sort By:
        </Text>
        <Text
          style={styles.selectedText}>
          {' '}{selected}{' '}
        </Text>
        <Icon name="caret-down" size={18} color={'#92929D'}/>
      </TouchableOpacity>

      <Modal visible={isOpen} transparent={true} animationType="none">
        <TouchableOpacity
          style={styles.overlay}
          onPress={() => setIsOpen(false)}
        >
          <View style={styles.dropdownOptions}>
            {options.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={styles.option}
                onPress={() => handleOptionSelect(option)}
              >
                <Text>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sortText:{
    fontFamily: 'Circular',
    fontSize: fontSize(12),
    fontWeight: '400',
    lineHeight: normalize(15),
    color: '#92929D',
  },
  selectedText:{
    fontFamily: 'Roboto',
    fontSize: fontSize(12),
    fontWeight: '400',
    lineHeight: normalize(15),
    color: '#696974',
  },
  dropdownButton: {
    flexDirection: 'row',
          alignItems: 'center',
          height: normalize(20),
  },
  selectedOption: {
    fontSize: 16,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  dropdownOptions: {
    position:'absolute',
    right:0,
    top:normalize(180),
    marginRight:normalize(24),
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 5,
    elevation: 5,
  },
  option: {
    paddingVertical: 10,
  },
});

export default CustomDropdown;
