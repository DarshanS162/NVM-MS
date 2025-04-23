import React, {useState } from 'react';
import { SafeAreaView, StyleSheet, Image, View, TouchableOpacity, ScrollView, TextInput, Text } from 'react-native';
import { customStyle, COLORS } from '../../custom/styles';
import RegisterImage from "../../../assets/register.png"
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import Toast from "react-native-toast-message";
import axios from "axios";
const baseUrl = `http://192.168.1.36:5000/app`;


const Registration = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');


    const registerUser = async () => {
        try {
            const teacher = {
                email: email,
                phoneNumber: mobile,
                password: password,
                isCompleted:false,
            }
            console.log(`${baseUrl}/register`);
            const res= await axios.post(`${baseUrl}/register`, teacher);
            Toast.show({
                type: 'success',  
                text1: 'You have registered successfully',
            });
            navigation.navigate('Login');
        } catch (error) {
            console.log("error while registering", error.message);
            showToast("error", "Error while registering");
        }
    }

    return (
        <SafeAreaView style={customStyle.container}>
            <ScrollView style={{ padding: 20, flex: 1 }}>
                <View style={styles.imageContainer}>
                    <Image source={RegisterImage} style={styles.image} />
                </View>

                <Text style={styles.loginText}>Register</Text>
                <Text style={{ fontFamily: "Montserrat-Regular" }}>Please register to login</Text>
                <View style={styles.inputContainer}>
                    <View style={styles.inputBox}>
                        <Ionicons name="mail-outline" size={25} color="#292929" />
                        <TextInput style={styles.inputField} keyboardType="email-address" placeholder='Enter Email' onChangeText={setEmail} value={email} />
                    </View>

                    <View style={styles.inputBox}>
                        <SimpleLineIcons name="phone" size={24} color="black" />
                        <TextInput style={styles.inputField} keyboardType="phone-pad" maxLength={10} placeholder='Enter Mobile Number' onChangeText={setMobile} value={mobile} />
                    </View>

                    <View style={styles.inputBox}>
                        <SimpleLineIcons name="lock" size={24} color="#292929" />
                        <TextInput style={styles.inputField} keyboardType="visible-password" placeholder='Enter Password' onChangeText={setPassword} />
                    </View>

                    <TouchableOpacity style={styles.signUpButton} onPress={registerUser}>
                        <Text style={styles.signUpText}>Sign up</Text>
                    </TouchableOpacity>

                    <View style={styles.dtHvAcc}>
                        <Text style={{ fontFamily: "Montserrat-Regular" }}>already have account? </Text>
                        <TouchableOpacity onPress={() => { navigation.navigate('Login') }}>
                            <Text style={{ fontSize: 14, fontWeight: 'bold', fontFamily: "Montserrat-Regular" }}>Sign in</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 270,
        alignSelf: "center",
    },
    imageContainer: {
        padding: 20,
    },

    loginText: {
        fontSize: 30,
        fontWeight: "bold",
        color: COLORS.primary,
        fontFamily: "Montserrat-Regular"
    },
    inputField: {
        height: 50,
        flex: 1,
        fontFamily: "Montserrat-Regular"
    },
    inputContainer: {
        gap: 20,
        padding: 10,
        marginTop: 8
    },
    inputBox: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        backgroundColor: "#ededed",
        borderRadius: 25,
        paddingHorizontal: 15,
    },
    signUpButton: {
        height: 50,
        borderRadius: 25,
        backgroundColor: COLORS.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    signUpText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
        fontFamily: "Montserrat-Regular"
    },
    dtHvAcc: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        justifyContent: 'center'
    },
});

export default Registration;
