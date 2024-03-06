import { View, Text ,Image, Button,StyleSheet} from 'react-native'
import React, { useState,useEffect } from 'react'
import { FlatList,TouchableOpacity } from 'react-native'
import { LinearGradient } from 'react-native-svg'
import { Ionicons } from '@expo/vector-icons'
import axios from 'axios';
import Header from '../../Components/HeaderComponent'

const HomeScreen = ({navigation}) => {
  

  const [quote, setQuote] = useState(null);

  useEffect(() => {
    fetchQuote();
  }, []);

  
    const renderQuotes = ({ item }) => {
      return (
        <View style={styles.item} className="shadow-lg rounded-3xl p-3 bg-cyan-800 ">
          <Image
          height={70}
          source={{ uri: "https://static-cse.canva.com/blob/676447/blue2_5.58d14ac0.png"}}
          resizeMode="cover"
        />
          <Text style= {styles.overlay} className="text-lg mt-1 text-white justify-items-center  font-bold" >{item.text}</Text>
          {/* <Text style={styles.author}>{item.author}</Text> */}
        </View>
      );
    };

  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://type.fit/api/quotes');
      // Assuming response.data is an array of quotes
      if (response.data && response.data.length > 0) {

        setQuote(response.data); // Set the first quote to the state
      }
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };
  

  const seeAll = () => {
    console.log('Button clicked!');
  };
    return(
      
        
        <View className="  flex-1 flex-col bg-gray-200">
        <View className=" flex-1 px-2 py-2 ">
            <Image
            className="h-full w-full rounded-3xl"
            source={{ uri: 'https://img.freepik.com/free-vector/vector-illustration-mountain-landscape_1441-77.jpg?size=626&ext=jpg&ga=GA1.1.87170709.1707609600&semt=sph' }} // Replace with your image URI
            resizeMode="cover" // Adjust resizeMode as needed
            />
        </View> 
        <View className=" flex-1">

          <View className=" h-8 flex-row justify-between">
            <View >
              <Text className="mt-1 ml-3 font-extrabold text-lg" >Mental Checkout</Text>
            </View>
            <View>
              <TouchableOpacity onPress={seeAll} >
                <Text className="text-right mt-1 mr-3 font-extrabold text-lg">See All</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View className="flex-row mx-2 p-2 h-28 rounded-3xl bg-cyan-800">
            <View className="flex-row w-10/12">
              <View className="flex-col flex-1 justify-between">
                <View className="flex-1">
                  <Text className=" text-2xl mt-3 mx-1 font-extrabold text-white ">Test your stress Level</Text>
                  <Text className=" text-md mx-1  text-white">Take up the assessment and get to know yourself better!</Text>
                </View>
              </View>
 
            </View>
            <View className="flex flex-col justify-center bg">
                <TouchableOpacity onPress={() =>{} } >
                    <Ionicons name="chevron-forward-outline" size={64} color="white" ></Ionicons>
                </TouchableOpacity>
              </View>
          </View>
          <Text className="font-extrabold mt-2 ml-3 text-lg">Glance over these beautiful quotes!</Text>
          
        
          <View className="flex-1  mx-2  rounded-3xl ">
            <FlatList
            data={quote}
            renderItem={renderQuotes}
            keyExtractor={(item, index) => index.toString()}
            horizontal={true} // Set to true for horizontal scroll
            />
          </View>
        </View>
        <View className="flex-1 bg-green-300">
          
        </View>
        </View>
      
    );
  
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  item: {
    borderRadius: 5,
    marginHorizontal: 10,
    width: 250, // Set width of each item
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});