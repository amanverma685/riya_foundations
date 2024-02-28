// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/homeScreen/HomeScreen';
import LoginScreen from './screens/loginScreen/LoginScreen';
import ProfileScreen from './screens/profileScreen/ProfileScreen';
import OnboardingScreen from './screens/onboardingScreen/OnboardingScreen';
import RegisterScreen from './screens/registerScreen/RegisterScreen';
import LandingScreen from './screens/landingScreen/LandingScreen';
import ExploreScreen from './screens/exploreScreen/ExploreScreen';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="OnboardingScreen" >
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
        name="LandingScreen"
        component={LandingScreen}
        options={{
          headerShown:false,
          title: 'Login',
        }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          headerShown:false,
          title: 'Awesome app',
        }}
      />      
      <Stack.Screen
        name="ExploreScreen"
        component={ExploreScreen}
        options={{
          headerShown:false,
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
