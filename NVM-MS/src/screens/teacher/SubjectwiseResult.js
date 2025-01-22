import { View, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLORS, customStyle } from '../../custom/styles'
import CustomSearchBar from '../../customComponents/CustomSearchBar'
import CustomTextAndInput from '../../customComponents/CustomTextAndInput'
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
                    <CustomTextAndInput type="text" > Sub : {item.sub}</CustomTextAndInput>
                    <CustomTextAndInput type="text"> Teacher : {item.teacher}</CustomTextAndInput>
                </View>
    
                <View style={styles.innerCard}>
                    <CustomTextAndInput type="text" style={styles.innerCardText}> Total Students : {item.totalStudents}</CustomTextAndInput>
                    <View style={styles.flexContainer}>
                        <CustomTextAndInput type="text" style={styles.innerCardText}> Present : {item.present}</CustomTextAndInput>
                        <CustomTextAndInput type="text" style={styles.innerCardText}> Absent : {item.absent}</CustomTextAndInput>
                    </View>
                    <View style={{ flexDirection: 'row',justifyContent:'space-between'}}>
                        <CustomTextAndInput type="text" style={styles.innerCardText}> Passed : {item.passed}</CustomTextAndInput>
                        <CustomTextAndInput type="text" style={styles.innerCardText}> Failed : {item.failed}</CustomTextAndInput>
                    </View>
                    <CustomTextAndInput type="text" style={styles.innerCardText}> Highest Marks : {item.highestMarks}</CustomTextAndInput>
                    <CustomTextAndInput type="text" style={styles.innerCardText}> Percentage : {item.percentage}% </CustomTextAndInput>
    
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <View></View>
                        <TouchableOpacity style={styles.viewStudents}>
                            <CustomTextAndInput type="text" style={{ color: '#fff',fontSize:14}}> View Students</CustomTextAndInput>
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
        fontSize:15
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