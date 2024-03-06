import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../Components/HeaderComponent'

const ExploreScreen = ({navigation}) => {
  return (
    <View>
      <Header title="Explore" onPressBack={() => navigation.goBack()} />

    </View>
  )
}

export default ExploreScreen