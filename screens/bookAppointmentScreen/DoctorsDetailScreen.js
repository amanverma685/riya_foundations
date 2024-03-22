import React from 'react';
import { View, Text, FlatList, ScrollView,TouchableOpacity,StyleSheet } from 'react-native';
import { doctorData } from '../../data/doctorData';
import DoctorCard from '../../Components/DoctorCard';
import Header from '../../Components/HeaderComponent';

const DoctorsDetailScreen = ({ navigation }) => {

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity  onPress={() =>navigation.navigate('BookAppointmentScreen',{ param: item.id }) } >
         <DoctorCard doctorData={item} />
      </TouchableOpacity>
         );
  };

  return (
    <View className="mt-2" style={{ flex: 1 }}>
      <Header title="See Doctor's List" onPressBack={() => navigation.goBack()} />
        <FlatList
          className="bg-white"
          data={doctorData}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          horizontal={false}
        />
     
    </View>
  );
};

export default DoctorsDetailScreen;



const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    marginLeft:40,
    borderRadius:10,
    elevation: 2,
    width:'80%',
    alignItems: 'center',
    padding: 10,
    marginTop:10,
    marginBottom:10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 85,
    height: 100,
    padding:20,
    borderRadius: 10,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
    padding:10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
