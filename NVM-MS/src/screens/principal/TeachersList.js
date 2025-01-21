import { View, Text, SafeAreaView, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import CustomSearchBar from '../../customComponents/CustomSearchBar'
import { COLORS, customStyle } from '../../custom/styles';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import CustomTextAndInput from '../../customComponents/CustomTextAndInput';
const Tab = createMaterialTopTabNavigator();

const TeachersList = ({ navigation }) => {
  const [searchActive, setSearchActive] = useState(false);
  const [searchText, setSearchText] = useState(false);
  const [sciTeachersList, setSciTeachersList] = useState([
   
    {
      "id": 2,
      "fullName": "Amit Sharma",
      "class": "12",
      "division": "A",
      "faculty": "Science",
      "phoneNumber": "9123456789"
    },
    {
      "id": 6,
      "fullName": "Pooja Yadav",
      "class": "12",
      "division": "B",
      "faculty": "Science",
      "phoneNumber": "9345678901"
    },
    {
      "id": 10,
      "fullName": "Anjali Reddy",
      "class": "12",
      "division": "C",
      "faculty": "Science",
      "phoneNumber": "9123987456"
    },
    {
      "id": 12,
      "fullName": "Sneha Sharma",
      "class": "12",
      "division": "B",
      "faculty": "Science",
      "phoneNumber": "9823476501"
    },
    {
      "id": 14,
      "fullName": "Sahil Kapoor",
      "class": "12",
      "division": "A",
      "faculty": "Science",
      "phoneNumber": "9998765432"
    },
  ]
  );
  const [comTeachersList, setComTeachersList] = useState([
   
    {
      "id": 3,
      "fullName": "Neha Patel",
      "class": "12",
      "division": "B",
      "faculty": "Commerce",
      "phoneNumber": "9988776655"
    },
    {
      "id": 5,
      "fullName": "Simran Verma",
      "class": "12",
      "division": "A",
      "faculty": "Commerce",
      "phoneNumber": "9234567890"
    },
   
    {
      "id": 9,
      "fullName": "Shivam Gupta",
      "class": "12",
      "division": "B",
      "faculty": "Commerce",
      "phoneNumber": "9876123456"
    },
    {
      "id": 13,
      "fullName": "Vishal Chauhan",
      "class": "12",
      "division": "C",
      "faculty": "Commerce",
      "phoneNumber": "9456789234"
    },
    {
      "id": 15,
      "fullName": "Maya Desai",
      "class": "12",
      "division": "B",
      "faculty": "Commerce",
      "phoneNumber": "9212345678"
    }
  ]
  );
  const [artsTeachersList, setArtsTeachersList] = useState([
    {
      "id": 1,
      "fullName": "Rajiv Mali",
      "class": "12",
      "division": "C",
      "faculty": "Arts",
      "phoneNumber": "9876543210"
    },
    {
      "id": 4,
      "fullName": "Ravi Kumar",
      "class": "12",
      "division": "C",
      "faculty": "Arts",
      "phoneNumber": "9456123456"
    },
    {
      "id": 7,
      "fullName": "Manish Mehta",
      "class": "12",
      "division": "C",
      "faculty": "Arts",
      "phoneNumber": "9456781234"
    },
    {
      "id": 8,
      "fullName": "Priya Singh",
      "class": "12",
      "division": "A",
      "faculty": "Arts",
      "phoneNumber": "8765432109"
    },
    {
      "id": 11,
      "fullName": "Karan Joshi",
      "class": "12",
      "division": "A",
      "faculty": "Arts",
      "phoneNumber": "9786123456"
    },
  
  ]
  )
  const handlesubmit = () => {

  };
  const handleApplyFilter = () => {

  };


  const renderItems = ({ item }) => {
    return (
      <TouchableOpacity style={styles.itemContainer}>
        <Image source={{ uri: "https://inventorymanagementdev.s3.us-east-1.amazonaws.com/defaultProfileImage.jpg" }} height={80} width={80} style={styles.image} />
        <View style={{flex:1}}>
         <CustomTextAndInput type="text" style={{fontSize:18}}>{item.fullName}</CustomTextAndInput>
          <View>
            <CustomTextAndInput type="text">Class: {item.class} {item.division}</CustomTextAndInput>
            <CustomTextAndInput type="text">Phone: {item.phoneNumber}</CustomTextAndInput>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView style={customStyle.container}>
      <CustomSearchBar
        searchActive={searchActive}
        handlesubmit={handlesubmit}
        handleApplyFilter={handleApplyFilter}
        setSearchText={setSearchText}
        searchText={searchText}
        setSearchActive={setSearchActive}
        navigation={navigation}
        labelText="Teachers"
        placeholderText="search teachers"
      />

      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarInactiveTintColor: "#aaa",
          tabBarIndicatorStyle: { backgroundColor: "transparent" },
          tabBarLabelStyle: { fontSize: 10, fontWeight: "bold" },
          tabBarStyle: { backgroundColor: "#fafbfd" },
          tabBarLabel: ({ focused, color }) => (
            <View
              style={{
                backgroundColor: focused ? COLORS.primary : "#ffffff",
                padding: 10,
                borderRadius: 10,
                paddingHorizontal: 20,
                flex: 1
              }}>
              <CustomTextAndInput type="text" style={[styles.label, { color: focused ? "#ffffff" : "#292929" }]}>{route.name}</CustomTextAndInput>
            </View>
          ),
        })}>

        <Tab.Screen name="Science">
          {() => (
        
              <FlatList
                data={sciTeachersList}
                renderItem={renderItems}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.flatlistStyle}
              />


          )}
        </Tab.Screen>
        <Tab.Screen name="Commerce">
          {() => (
              <FlatList
                data={comTeachersList}
                renderItem={renderItems}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.flatlistStyle}
              />)}
        </Tab.Screen>
        <Tab.Screen name="Arts">
          {() => (
    
              <FlatList
                data={artsTeachersList}
                renderItem={renderItems}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.flatlistStyle}
              />)}
        </Tab.Screen>
      </Tab.Navigator>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    padding: 10,
    borderWidth: 0.5,
    borderColor:"#B8BEC6",
    gap:20,
    backgroundColor:"#FAFBFD",
    alignItems:"center",
    borderRadius:10,
  },
  flatlistStyle: {
    gap: 10,
    padding: 12,
    backgroundColor:"#FFFFFF",
    paddingTop:20,
    flex:1,
  },
  image:{
    borderRadius:50
  }
});

export default TeachersList;