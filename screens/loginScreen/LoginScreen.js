// LoginScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet,Alert } from 'react-native';
import axios from 'axios';
import InputComponent from '../../Components/InputComponent';


const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user,setUser]= useState({});

  const handleLogin = async() => {
    const cred = {
      "email":email,
      "password":password
    }
    const headers = {
      'Content-Type': 'application/json',
    };
    console.log(email,password);

    try {
      const response = await axios.post(`https://673a-106-51-164-14.ngrok-free.app/api/user/authenticate`,cred,{headers});
      console.log(response.data);  
      setUser(response.data);

        navigation.navigate('LandingScreen');
    } catch (error) {
      console.error('Error fetching data:', error);
      Alert.alert('Error', 'Failed to fetch data');
    }
    navigation.navigate('LandingScreen');
    
    // if (1) {
    //   Alert.alert('Invalid Login', 'Please enter valid email and password.');
    // }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      
      <InputComponent className="mt-4"
      placeholder="example@email.com"
      value={email}
      onChangeMethod={setEmail}
      keyboardType="email-address"
      secureTextEntry={false}
      />
      <InputComponent 
      className="mt-4"
      placeholder="example@password"
      value={password}
      onChangeMethod={setPassword}
      secureTextEntry={true}
      />
      
      <Button title="Submit" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default LoginScreen;
