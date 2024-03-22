import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';
import Header from '../../Components/HeaderComponent';

const BookAppointmentScreen = ({navigation}) => {
    const route = useRoute();
  const { param } = route.params;
  console.log(param)
  return (
    <ScrollView>
        <View className="flex flex-1 mt-6 bg-red-300">
            <View className="basis-1/14">
                <Header onPressBack={() => navigation.goBack()} title="Book Your Appointment"/>
            </View>
            <View className="basis-2/4 bg-red-300">
                
            </View>
        </View>
    </ScrollView>
  )
}

export default BookAppointmentScreen