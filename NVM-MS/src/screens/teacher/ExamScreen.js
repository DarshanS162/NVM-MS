import { View, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLORS, customStyle } from '../../custom/styles'
import CustomSearchBar from '../../customComponents/CustomSearchBar'
import CustomTextAndInput from '../../customComponents/CustomTextAndInput'
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
                    <CustomTextAndInput type="text" style={{ fontSize: 18 }}> Examination Year : {selectedYear} - {Number(selectedYear)+1} </CustomTextAndInput>
                    <TouchableOpacity onPress={() =>{setShowYear(true)} }><FontAwesome name="calendar" size={20} color="black" /></TouchableOpacity>
                </View>

                <View style={{ gap: 20, paddingHorizontal: 12, marginTop: 20 }}>
                    <TouchableOpacity style={styles.termsButton} onPress={()=> navigation.navigate('SubjectwiseResult')}>
                        <CustomTextAndInput type="text">Unit I</CustomTextAndInput>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.termsButton} onPress={()=> navigation.navigate('SubjectwiseResult')}>
                        <CustomTextAndInput type="text">Semister I</CustomTextAndInput>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.termsButton} onPress={()=> navigation.navigate('SubjectwiseResult')}>
                        <CustomTextAndInput type="text">Unit II</CustomTextAndInput>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.termsButton} onPress={()=> navigation.navigate('SubjectwiseResult')}>
                        <CustomTextAndInput type="text">Semister II</CustomTextAndInput>
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