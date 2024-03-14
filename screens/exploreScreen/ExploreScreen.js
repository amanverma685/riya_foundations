import { View, Text,FlatList } from 'react-native';
import React from 'react'
import Header from '../../Components/HeaderComponent'
import Card from '../../Components/CardComponent'
import { data } from '../../data/courses'

const ExploreScreen = ({navigation}) => {

  const onPressHandler = null;

  const renderItem = ({ item }) => {
    return (<Card title={item.title} description={item.description} imageSource={item.image} onPress={onPressHandler}  />);
  };

  return (
    <View className="flex-1 flex-col">
      <Header title="Know Yourself Better" onPressBack={() => navigation.goBack()} />
      <View >
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
            horizontal={false} // Set to true for horizontal scroll
        />
      </View>
     
    </View>
  )
}

export default ExploreScreen;
