import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Header = ({ title, onPressBack }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', height: 60, backgroundColor: '#f0f0f0', paddingHorizontal: 10 }}>
      <TouchableOpacity onPress={onPressBack} style={{ paddingRight: 10 }}>
        <Text style={{ fontSize: 18 }}>Back</Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{title}</Text>
    </View>
  );
};

export default Header;
