import { View, SafeAreaView, StyleSheet, TouchableOpacity, Text } from 'react-native'
import React, { useState } from 'react'
import { COLORS, customStyle } from '../../custom/styles'
import CustomSearchBar from '../../customComponents/CustomSearchBar'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import CustomDatePicker from '../../customComponents/CustomDatePicker'

const ExamScreen = ({ navigation }) => {
    const [showYear, setShowYear] = useState(false);
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());


    const handleDateChange = (year) =>{
        const date = new Date(year);
        const extractedYear = date.getFullYear();
        setSelectedYear(extractedYear);
    }

    return (
        <SafeAreaView style={customStyle.container}>
            <CustomSearchBar
                navigation={navigation}
                labelText="Exam Terms"
            />

            <View style={styles.mainConatainer}>
                <View style={styles.examYear}>
                    <Text style={{ fontSize: 18, fontFamily:"Montserrat-Regular"}}> Examination Year : {selectedYear} - {Number(selectedYear)+1} </Text>
                    <TouchableOpacity onPress={() =>{setShowYear(true)} }><FontAwesome name="calendar" size={20} color="black" /></TouchableOpacity>
                </View>

                <View style={{ gap: 20, paddingHorizontal: 12, marginTop: 20 }}>
                    <TouchableOpacity style={styles.termsButton} onPress={()=> navigation.navigate('SubjectwiseResult')}>
                        <Text style={{fontFamily:"Montserrat-Regular"}}>Unit I</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.termsButton} onPress={()=> navigation.navigate('SubjectwiseResult')}>
                        <Text style={{fontFamily:"Montserrat-Regular"}}>Semister I</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.termsButton} onPress={()=> navigation.navigate('SubjectwiseResult')}>
                        <Text style={{fontFamily:"Montserrat-Regular"}}>Unit II</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.termsButton} onPress={()=> navigation.navigate('SubjectwiseResult')}>
                        <Text style={{fontFamily:"Montserrat-Regular"}}>Semister II</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <CustomDatePicker
                mode="year"
                minYear={2020}
                maxYear={2030}
                onDateChange={handleDateChange}
                placeholder="Select Month and Year"
                show={showYear}
                setShow={setShowYear}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainConatainer: {
        padding: 12
    },
    examYear: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        paddingVertical: 20
    },
    termsButton: {
        alignItems: 'center',
        backgroundColor: '#E1DAFF',
        paddingVertical: 20,
        borderRadius: 10
    },
});

export default ExamScreen