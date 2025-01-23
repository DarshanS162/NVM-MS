import { View, SafeAreaView, StyleSheet, TouchableOpacity, Text } from 'react-native'
import React, { useState } from 'react'
import { COLORS, customStyle } from '../../custom/styles'
import CustomSearchBar from '../../customComponents/CustomSearchBar'
import { FlatList } from 'react-native-gesture-handler'

const SubjectwiseResult = ({ navigation }) => {
    const [data, setData] = useState([
        {    
            "id":1,
            "sub":"Marathi",
            "teacher" : "Farine Parvez Khan",
            "totalStudents" :  80,
            "present" : 78,
            "absent" : 2,
            "passed":70,
            "failed" : 10,
            "highestMarks" : 40,
            "percentage" : 56,
        },
        {
            "id":2,
            "sub": "Mathematics",
            "teacher": "Rohit Sharma",
            "totalStudents": 85,
            "present": 83,
            "absent": 2,
            "passed": 75,
            "failed": 8,
            "highestMarks": 48,
            "percentage": 65
        },
        {   
            "id":3,
            "sub": "English",
            "teacher": "Ananya Singh",
            "totalStudents": 90,
            "present": 88,
            "absent": 2,
            "passed": 80,
            "failed": 10,
            "highestMarks": 49,
            "percentage": 70
        },
        {   
            "id":4,
            "sub": "Science",
            "teacher": "Pankaj Verma",
            "totalStudents": 100,
            "present": 98,
            "absent": 2,
            "passed": 85,
            "failed": 13,
            "highestMarks": 50,
            "percentage": 72
        },
        {   
            "id":5,
            "sub": "History",
            "teacher": "Meena Desai",
            "totalStudents": 75,
            "present": 73,
            "absent": 2,
            "passed": 65,
            "failed": 8,
            "highestMarks": 46,
            "percentage": 60
        },
        {   
            "id":6,
            "sub": "Geography",
            "teacher": "Suresh Patel",
            "totalStudents": 60,
            "present": 58,
            "absent": 2,
            "passed": 55,
            "failed": 3,
            "highestMarks": 50,
            "percentage": 92
        }        
    ]);

    const renderItem = ({item}) =>{
        return(

            <View style={styles.detailsCard}>
            
                <View style={{ padding: 10 }}>
                    <Text style={{fontFamily:"Montserrat-Regular"}} > Sub : {item.sub}</Text>
                    <Text  style={{fontFamily:"Montserrat-Regular"}}> Teacher : {item.teacher}</Text>
                </View>
    
                <View style={styles.innerCard}>
                    <Text type="text" style={styles.innerCardText}> Total Students : {item.totalStudents}</Text>
                    <View style={styles.flexContainer}>
                        <Text type="text" style={styles.innerCardText}> Present : {item.present}</Text>
                        <Text type="text" style={styles.innerCardText}> Absent : {item.absent}</Text>
                    </View>
                    <View style={{ flexDirection: 'row',justifyContent:'space-between'}}>
                        <Text type="text" style={styles.innerCardText}> Passed : {item.passed}</Text>
                        <Text type="text" style={styles.innerCardText}> Failed : {item.failed}</Text>
                    </View>
                    <Text type="text" style={styles.innerCardText}> Highest Marks : {item.highestMarks}</Text>
                    <Text type="text" style={styles.innerCardText}> Percentage : {item.percentage}% </Text>
    
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <View></View>
                        <TouchableOpacity style={styles.viewStudents}>
                            <Text type="text" style={{ color: '#fff',fontSize:14,fontFamily:"Montserrat-Regular"}}> View Students</Text>
                        </TouchableOpacity>
                    </View>
    
                </View>
            </View>
     
        );
       
    }
    return (
        <SafeAreaView style={customStyle.container}>
            <CustomSearchBar
                navigation={navigation}
                labelText="Subjectwise Result"
            />
            <FlatList
                data={data}
                renderItem={renderItem}
                contentContainerStyle={{gap:20,padding:12}}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    detailsCard: {
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: COLORS.primary,
        backgroundColor: COLORS.background
    },
    innerCard: {
        borderRadius: 10,
        borderWidth:0.5,
        borderColor: COLORS.primaryBorder,
        marginBottom: 20,
        marginHorizontal: 10,
        padding:10
    },
    innerCardText:{
        fontSize:15,
        fontFamily:"Montserrat-Regular"
    },
    viewStudents: {
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical:6,
        backgroundColor: COLORS.primary,
    },
    flexContainer:{
        flexDirection: 'row',
        justifyContent:'space-between'
    }
});

export default SubjectwiseResult