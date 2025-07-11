import { View, SafeAreaView, StyleSheet, Image, TouchableOpacity, ScrollView, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import CustomSearchBar from '../../customComponents/CustomSearchBar';
import { COLORS, customStyle } from '../../custom/styles';
import * as ImagePicker from "expo-image-picker";
import { Dropdown } from 'react-native-element-dropdown';

const AddTeacher = ({ navigation }) => {
    const [teacherData, setTeacherData] = useState({
        fullName: "",
        class: "",
        div: "",
        faculty: "",
        email: "",
        phone: ""
    });
    const [faculty, setFaculty] = useState("");

    const [image, setImage] = useState("https://inventorymanagementdev.s3.us-east-1.amazonaws.com/defaultProfileImage.jpg");
    const data = [
        { label: 'Science', value: '1' },
        { label: 'Commerce', value: '2' },
        { label: 'Arts', value: '3' },
    ];

    const handleImageUpload = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'], 
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const handleInputChange = (key, value) => {
        setTeacherData((prev) => ({
            ...prev,
            [key]: value,
        }));
    };


    return (
        <SafeAreaView style={customStyle.container}>
            <CustomSearchBar
                navigation={navigation}
                labelText="Add Teachers"
            />
            <ScrollView >   
                <View style={styles.innerContainer}>

                    <TouchableOpacity style={{ alignSelf: "center", gap: 10 }} onPress={handleImageUpload}>
                        <Text style={{ alignSelf: "center", fontSize: 18 ,fontFamily:"Montserrat-Regular"}}>Profile Photo</Text>
                        <Image source={{ uri: image }}
                            height={150} width={150} style={styles.image} />
                    </TouchableOpacity>

                    <View style={styles.singleInput}>
                        <Text style={styles.label}>Full Name</Text>
                        <TextInput style={styles.input}  placeholder='Eg. Darshan Devidas Salunkhe 'value={teacherData.fullName}
                            onChangeText={(text) => handleInputChange('fullName', text)} />
                    </View>
                    <View style={styles.twoInput}>
                        <View style={styles.labelInput}>
                            <Text style={styles.label}>Class</Text>
                            <TextInput style={styles.input} placeholder='Eg. 12'value={teacherData.class}
                            onChangeText={(text) => handleInputChange('class', text)}/>
                        </View>

                        <View style={styles.labelInput}>
                            <Text style={styles.label}>Division</Text>
                            <TextInput style={styles.input} placeholder='Eg. A' value={teacherData.div}
                            onChangeText={(text) => handleInputChange('div', text)}/>
                        </View>

                    </View>
                    <View style={styles.singleInput}>
                        <Text style={styles.label}>Faculty</Text>
                        <Dropdown
                            data={data}
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder='Select Faculty'
                            value={faculty}
                            onChange={setFaculty}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            style={[styles.input, { padding: 10 }]}
                        />
                    </View>
                    <View style={styles.singleInput}>
                        <Text style={styles.label}>Email Id</Text>
                        <TextInput value={teacherData.email}
                            onChangeText={(text) => handleInputChange('email', text)} style={styles.input} keyboardType="email-address" placeholder='Eg. Eample@gmail.com'  />
                    </View>
                    <View style={styles.singleInput}>
                        <Text style={styles.label}>Phone Number</Text>
                        <TextInput value={teacherData.phone}
                            onChangeText={(text) => handleInputChange('phone', text)}  style={styles.input} keyboardType="phone-pad" placeholder='Eg. 9638527410' />
                    </View>


                    <TouchableOpacity style={styles.saveButton}>
                        <Text style={styles.saveButtonText}>Save</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    innerContainer: {
        padding: 12,
        gap: 20
    },
    image: {
        borderRadius: 100,
    },
    twoInput: {
        flexDirection: "row",
        gap: 10
    },
    labelInput: {
        flex: 1,
    },
    label: {
        fontSize: 18,
        fontFamily:"Montserrat-Regular",
    },
    input: {
        backgroundColor: COLORS.background,
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: COLORS.primaryBorder,
        paddingLeft: 10,
        fontFamily:"Montserrat-Regular",
    },
    saveButton: {
        backgroundColor: COLORS.primary,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 10,
        margin: 20
    },
    saveButtonText: {
        fontSize: 20,
        color: "#fff",
        fontFamily:"Montserrat-Regular"
    },
    placeholderStyle: {
        color: "#8e8e8e",
        fontFamily: "Montserrat-Regular",
        fontSize: 16,

    },
    selectedTextStyle: {
        fontFamily: "Montserrat-Regular",
    }


});

export default AddTeacher