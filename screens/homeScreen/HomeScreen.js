import { View, Text ,Image, Button,StyleSheet} from 'react-native'
import React, { useState,useEffect } from 'react'
import { FlatList,TouchableOpacity } from 'react-native'
import { LinearGradient } from 'react-native-svg'
import { Ionicons } from '@expo/vector-icons'
import axios from 'axios';
import {LineChart } from "react-native-gifted-charts";
import Header from '../../Components/HeaderComponent'

const HomeScreen = ({navigation}) => {

  
  const data=[ {value:50}, {value:80}, {value:90}, {value:70},{value:50}, {value:80}, {value:90}, {value:70} ]
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    fetchQuote();
  }, []);

  
    const renderQuotes = ({ item }) => {
      return (
        <View style={styles.item} className="shadow-lg rounded-3xl p-3 bg-cyan-800 ">
          <Text style= {styles.overlay} className="text-lg p-3 mt-1 text-white justify-items-center  font-bold" >{item.text}</Text>
          {/* <Text style={styles.author}>{item.author}</Text> */}
        </View>
      );
    };

  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://type.fit/api/quotes');
      // Assuming response.data is an array of quotes
      if (response.data && response.data.length > 0) {
        setQuote(response.data);
      }
    } catch (error) {
      console.log(error.message);
      console.error('Error fetching quote:', error);
    }
  };
  

  const seeAll = () => {
    navigation.replace("QuizScreen");
  };
    return(
      
        
        <View className="  flex-1 flex-col bg-gray-200">
        <View className=" px-2 py-2 ">

            <Image
            className=" h-48 w-full rounded-3xl"
            source={{ uri: 'https://img.freepik.com/free-vector/vector-illustration-mountain-landscape_1441-77.jpg?size=626&ext=jpg&ga=GA1.1.87170709.1707609600&semt=sph' }} // Replace with your image URI
            resizeMode="cover" // Adjust resizeMode as needed

            />
        </View> 
        <View className=" flex-1">

          <View className=" h-8 mb-2 flex-row justify-between">
            <View >
              <Text className="mt-1 ml-3 font-extrabold text-lg" >Mental Checkout</Text>
            </View>
            
          </View>
          <View className="flex-row mx-2 p-2 h-20 rounded-3xl bg-cyan-800">
            <View className="flex-row w-10/12">
              <View className="flex-col flex-1 justify-between">
                <View className="flex-1">
                  <Text className=" text-xl  mx-1 font-extrabold text-white ">Test your stress Level</Text>
                  <Text className=" text-md mx-1  text-white">Take up the assessment and get to know yourself better!</Text>
                </View>
              </View>
 
            </View>
            <View className="flex flex-col justify-center bg">
                <TouchableOpacity onPress={() =>{seeAll()} } >
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
          <ChartWithPointer/>
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

const ChartWithPointer = () => {
  const ptData = [
    {value: 160, date: '1 Apr 2022'},
    {value: 180, date: '2 Apr 2022'},
    {value: 190, date: '3 Apr 2022'},
    {value: 180, date: '4 Apr 2022'},
    {value: 140, date: '5 Apr 2022'},
    {value: 145, date: '6 Apr 2022'},
    {value: 160, date: '7 Apr 2022'},
    {value: 200, date: '8 Apr 2022'},

    {value: 220, date: '9 Apr 2022'},
    {
      value: 240,
      date: '10 Apr 2022',
      label: '10 Apr',
      labelTextStyle: {color: 'lightgray', width: 60},
    },
    {value: 280, date: '11 Apr 2022'},
    {value: 260, date: '12 Apr 2022'},
    {value: 340, date: '13 Apr 2022'},
    {value: 385, date: '14 Apr 2022'},
    {value: 280, date: '15 Apr 2022'},
    {value: 390, date: '16 Apr 2022'},

    {value: 370, date: '17 Apr 2022'},
    {value: 285, date: '18 Apr 2022'},
    {value: 295, date: '19 Apr 2022'},
    {
      value: 300,
      date: '20 Apr 2022',
      label: '20 Apr',
      labelTextStyle: {color: 'lightgray', width: 60},
    },
    {value: 280, date: '21 Apr 2022'},
    {value: 295, date: '22 Apr 2022'},
    {value: 260, date: '23 Apr 2022'},
    {value: 255, date: '24 Apr 2022'},

    {value: 190, date: '25 Apr 2022'},
    {value: 220, date: '26 Apr 2022'},
    {value: 205, date: '27 Apr 2022'},
    {value: 230, date: '28 Apr 2022'},
    {value: 210, date: '29 Apr 2022'},
    {
      value: 200,
      date: '30 Apr 2022',
      label: '30 Apr',
      labelTextStyle: {color: 'lightgray', width: 60},
    },
    {value: 240, date: '1 May 2022'},
    {value: 250, date: '2 May 2022'},
    {value: 280, date: '3 May 2022'},
    {value: 250, date: '4 May 2022'},
    {value: 210, date: '5 May 2022'},
  ];
  return (
    <View
    
      style={{
        marginBottom:40,
        paddingVertical:10,
        paddingLeft: 20,
        backgroundColor: 'white',
      }}>
      <LineChart
        areaChart
        data={ptData}
        rotateLabel
        width={300}
        hideDataPoints
        spacing={10}
        color="#00ff83"
        thickness={2}
        startFillColor="rgba(20,105,81,0.3)"
        endFillColor="rgba(20,85,81,0.01)"
        startOpacity={0.9}
        endOpacity={0.2}
        initialSpacing={0}
        noOfSections={6}
        stepHeight={50}
        height={300}
        maxValue={500}
        yAxisColor="white"
        yAxisThickness={0}
        // rulesType={ruleTypes.SOLID}
        rulesColor="gray"
        yAxisTextStyle={{color: 'gray'}}
        yAxisLabelPrefix="hello"
        yAxisTextNumberOfLines={2}
        // yAxisLabelWidth={40}
        // yAxisSide='right'
        xAxisColor="lightgray"
        pointerConfig={{
          pointerStripHeight: 160,
          pointerStripColor: 'lightgray',
          pointerStripWidth: 2,
          pointerColor: 'lightgray',
          radius: 6,
          pointerLabelWidth: 100,
          pointerLabelHeight: 90,
          // activatePointersOnLongPress: true,
          autoAdjustPointerLabelPosition: false,
          pointerLabelComponent: items => {
            return (
              <View 
                style={{
                  height: 90,
                  width: 100,
                  justifyContent: 'center',
                  // marginTop: -30,
                  // marginLeft: -40,
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 14,
                    marginBottom: 6,
                    textAlign: 'center',
                  }}>
                  {items[0].date}
                </Text>

                <View
                  style={{
                    paddingHorizontal: 14,
                    paddingVertical: 6,
                    borderRadius: 16,
                    backgroundColor: 'white',
                  }}>
                  <Text style={{fontWeight: 'bold', textAlign: 'center'}}>
                    {'$' + items[0].value + '.0'}
                  </Text>
                </View>
              </View>
            );
          },
        }}
      />
    </View>
  );
};
