import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ScrollView, Platform, SafeAreaView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import CustomSearchBar from '../../customComponents/CustomSearchBar';
import { COLORS, customStyle } from '../../custom/styles';
const baseUrl = `http://192.168.1.36:5000/app`;
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const StudentProfile = ({ navigation }) => {
    const [student, setStudent] = useState({
        fullname: '',
        email: '',
        phone: '',
        gender: 'Male',
        dob: new Date(),
        address: '',
        caste: 'General',
        class: '',
        regNo: '',
        division: '',
        religion: ''
    });
    const [token, setToken] = useState('');
    const [showDatePicker, setShowDatePicker] = useState(false);

    const handleChange = (key, value) => {
        setStudent({ ...student, [key]: value });
    };

    useEffect(() => {
        getUser();
    }, []);


    const getUser = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('user');
            if (jsonValue !== null) {
                const user = JSON.parse(jsonValue);
                setToken(user.token);
            }
        } catch (err) {
            console.error('Failed to load user from AsyncStorage', err.message);
        }
    };


    const handleSubmit = async () => {
        try {
            const response = await axios.post(`${baseUrl}/addStudent`, student, { headers: { Authorization: `Bearer ${token}` } });
            console.log("response", response.data);
            alert('Student added successfully!');
            navigation.navigate('StudentList');
        } catch (error) {
            if (error.response.status == 401) {
                alert('Unauthorized! Please login again.');
                navigation.navigate('Login');
            } else {
                console.error('Error adding student:', error);
                alert('Failed to add student. Please try again.');
            }
        }
    };

    return (

        <SafeAreaView style={customStyle.container}>
            <CustomSearchBar
                navigation={navigation}
                labelText="Add Students"
            />
            <ScrollView contentContainerStyle={styles.container}>
                <View style={{ gap: 8 }}>
                    <TextInput style={styles.input} placeholder="Full Name" value={student.fullname}
                        onChangeText={(text) => handleChange('fullname', text)} />

                    <TextInput style={styles.input} placeholder="Email" keyboardType="email-address"
                        value={student.email} onChangeText={(text) => handleChange('email', text)} />

                    <TextInput style={styles.input} placeholder="Phone" keyboardType="phone-pad" maxLength={10}
                        value={student.phone} onChangeText={(text) => handleChange('phone', text)} />

                    <TextInput style={styles.input} placeholder="Registration No" value={student.regNo}
                        onChangeText={(text) => handleChange('regNo', text)} />

                    <TextInput style={styles.input} placeholder="Class" value={student.class}
                        onChangeText={(text) => handleChange('class', text)} />

                    <TextInput style={styles.input} placeholder="Division" value={student.division}
                        onChangeText={(text) => handleChange('division', text)} />

                </View>


                <Text style={styles.label}>Gender</Text>
                <View style={styles.pickerContainer}>
                    <Picker selectedValue={student.gender} onValueChange={(value) => handleChange('gender', value)}>
                        <Picker.Item label="Male" value="Male" />
                        <Picker.Item label="Female" value="Female" />
                        <Picker.Item label="Other" value="Other" />
                    </Picker>
                </View>

                <Text style={styles.label}>Date of Birth</Text>
                <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.dateButton}>
                    <Text>{student.dob.toDateString()}</Text>
                </TouchableOpacity>




                {showDatePicker && (
                    <DateTimePicker
                        value={student.dob}
                        mode="date"
                        display="default"
                        onChange={(event, date) => {
                            setShowDatePicker(false);
                            if (date) handleChange('dob', date);
                        }}
                    />
                )}

                <TextInput
                    style={[styles.input, { height: 80, marginTop: 6 }]}
                    placeholder="Address"
                    value={student.address}
                    multiline
                    onChangeText={(text) => handleChange('address', text)}
                />

                <Text style={styles.label}>Caste</Text>
                <View style={{ marginBottom: 12, gap: 8 }}>

                    <View style={styles.pickerContainer}>
                        <Picker selectedValue={student.caste} onValueChange={(value) => handleChange('caste', value)}>
                            <Picker.Item label="General" value="General" />
                            <Picker.Item label="OBC" value="OBC" />
                            <Picker.Item label="SC" value="SC" />
                            <Picker.Item label="ST" value="ST" />
                            <Picker.Item label="Other" value="Other" />
                        </Picker>
                    </View>

                    <TextInput style={styles.input} placeholder="Religion" value={student.religion}
                        onChangeText={(text) => handleChange('religion', text)} />

                </View>
                <TouchableOpacity style={styles.saveButton} onPress={handleSubmit} >
                    <Text style={styles.saveButtonText}>Save</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#f2f6fc',
        padding: 20,
    },
    headerContainer: {
        alignItems: 'center',
        marginBottom: 25,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#007AFF',
        marginBottom: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'semibold',
        color: '#2b2d42',
        marginBottom: 12,
        fontFamily: "Montserrat-Regular"
    },
    formCard: {
        backgroundColor: '#ffffff',
        borderRadius: 16,
        padding: 20,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 8,
        elevation: 6,
    },
    label: {
        fontSize: 14,
        color: '#555',
        fontWeight: '600',
        marginBottom: 6,
        marginTop: 12,
        fontFamily: "Montserrat-Regular"
    },
    input: {
        backgroundColor: '#f9f9f9',
        borderWidth: 1,
        borderColor: '#d3d3d3',
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 12,
        fontSize: 15,
        fontFamily: "Montserrat-Regular"
    },
    pickerContainer: {
        borderWidth: 1,
        borderColor: '#d3d3d3',
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: '#f9f9f9',
    },
    dateButton: {
        backgroundColor: '#f1f1f1',
        borderRadius: 10,
        padding: 12,
    },
    dateText: {
        fontSize: 15,
        color: '#333',
    },
    submitButton: {
        backgroundColor: '#007AFF',
        paddingVertical: 14,
        borderRadius: 12,
        marginTop: 25,
    },
    submitText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
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
        fontFamily: "Montserrat-Regular"
    },
});



export default StudentProfile;