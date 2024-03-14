import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Button } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  // Mock user data
  const user = {
    name: "John Doe",
    email: "john@example.com",
    avatar: require('../../assets/images/image4.png') // Adjust the path to your avatar image
  };

  const handleLogout = () => {
    // Implement logout functionality
    // For example, navigate to the login screen or clear user data from storage
  };

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image source={user.avatar} style={styles.avatar} />
      </View>
      <View style={styles.userInfo}>
        <Text style={styles.userName}>{user.name}</Text>
        <Text style={styles.userEmail}>{user.email}</Text>
      </View>
      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  avatarContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60, // to make it circular
  },
  userInfo: {
    marginBottom: 20,
    alignItems: 'center',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  userEmail: {
    fontSize: 18,
    color: '#666',
  },
  logoutButton: {
    backgroundColor: '#FF6347', // Just a sample color
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default ProfileScreen;
