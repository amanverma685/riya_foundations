import { View, Text } from 'react-native'
import React from 'react'
import {  TextInput, StyleSheet } from 'react-native';

const InputComponent = ({placeholder,value,onChangeMethod,keyboardType,secureTextEntry}) => {
  return (
    <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeMethod}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
      />
  )
}

export default InputComponent

const styles = StyleSheet.create({
    title: {
      fontSize: 24,
      marginBottom: 20,
    },
    input: {
      width: '100%',
      height: 50,
      fontSize:18,
      borderWidth: 2,
      borderColor: 'black',
      borderRadius: 10,
      textDecorationColor:'green',
      color:'black',
      marginBottom: 10,
      paddingHorizontal: 10,
    },
  });