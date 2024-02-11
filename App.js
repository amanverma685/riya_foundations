// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/homeScreen/HomeScreen';
import LoginScreen from './screens/loginScreen/LoginScreen';
import ProfileScreen from './screens/profileScreen/ProfileScreen';
import OnboardingScreen from './screens/onboardingScreen/OnboardingScreen';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="OnboardingScreen"
        // screenOptions={{
        //   headerMode: 'screen',
        //   headerTintColor: 'white',
        //   headerStyle: { backgroundColor: 'tomato' },
        // }}
      >
        <Stack.Screen
    
        name="OnboardingScreen"
        component={OnboardingScreen}
        options={{
          headerShown:false,
          title: 'Onboarding',
          headerShown:false
        }}
      />
      <Stack.Screen
    
        name="LoginScreen"
        component={LoginScreen}
        options={{
          headerShown:false,
          title: 'Login',
        }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown:false,
          title: 'Awesome app',
        }}
      />
       <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          title: 'Awesome app',
        }}
      />
      
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
