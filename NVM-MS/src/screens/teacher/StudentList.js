import { View, FlatList, StyleSheet, TouchableOpacity, Image, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import AntDesign from '@expo/vector-icons/AntDesign';
import { COLORS, customStyle } from '../../custom/styles';
import CustomSearchBar from '../../customComponents/CustomSearchBar';
const baseUrl = `http://192.168.1.36:5000/app`

const StudentList = ({navigation}) => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudents();
  }, []);


  const getStudents = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('user');
      if (jsonValue !== null) {
        const user = JSON.parse(jsonValue);
        const response = await axios.get(`${baseUrl}/getStudents`, {
          params: {
            studentClass: user.teacher.class,
            division: user.teacher.div,
          }
        });
        console.log("students", response.data);
        setStudents(response.data);
      }
    } catch (err) {
      console.error('Error getting students:', err.message);
      alert('Failed to get student. Please try again.');
    }
  };


  const renderItems = ({ item }) => {
    return (
      <TouchableOpacity style={styles.itemContainer}>
        <Image source={{ uri: "https://inventorymanagementdev.s3.us-east-1.amazonaws.com/defaultProfileImage.jpg" }} height={70} width={70} style={styles.image} />
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 18, fontFamily: "Montserrat-Regular"}}>{item.fullname}</Text>
          <View>
            <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
              <Text style={{ fontFamily: "Montserrat-Regular" }} >Class: {item.class}      |      Div: {item.division}</Text>
            </View>
            <Text style={{ fontFamily: "Montserrat-Regular" }}>Registration no : {item.regNo}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  return (

      <SafeAreaView style={customStyle.container}>
      <CustomSearchBar
        navigation={navigation}
        labelText="Student List"
      />
      <View contentContainerStyle={styles.container}>
      <FlatList
        data={students}
        renderItem={renderItems}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item._id.toString()}
        contentContainerStyle={styles.flatlistStyle}
        ListFooterComponent={<View style={{ height: 70 }} />}
      />
      </View>

      <TouchableOpacity style={styles.addIcon} onPress={()=> navigation.navigate("StudentProfile")}>
        <AntDesign name="pluscircle" size={64} color={COLORS.primary} />
      </TouchableOpacity>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    padding: 10,
    borderWidth: 0.5,
    borderColor: "#B8BEC6",
    gap: 20,
    backgroundColor: "#FAFBFD",
    alignItems: "center",
    borderRadius: 10,
  },
  flatlistStyle: {
    gap: 10,
    padding: 12,
    backgroundColor: "#FFFFFF",
    // paddingVertical: 50,

  },
  image: {
    borderRadius: 50
  },
  addIcon: {
    position: 'absolute',
    right: '10%',
    bottom: '5%'

  }
});


export default StudentList