import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Platform, StatusBar, Image, View, TextInput, TouchableOpacity, Text, ScrollView } from 'react-native';
import { customStyle, COLORS } from '../../custom/styles';
import loginImage from "../../../assets/login.png"
import CustomTextAndInput from "../../customComponents/CustomTextAndInput"
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';

const Login = ( {navigation}) => {
    const [text, onChangeText] = useState('');
    return (
        <SafeAreaView style={customStyle.container}>
            <ScrollView style={{ padding: 20, flex: 1 }}>
                <View style={styles.imageContainer}>
                    <Image source={loginImage} style={styles.image} />
                </View>
                
                <CustomTextAndInput type="text" style={styles.loginText}>Login</CustomTextAndInput>
                <CustomTextAndInput type="text">Please Sign in to continue</CustomTextAndInput>
                <View style={styles.inputContainer}>
                    <View style={styles.inputBox}>
                        <Ionicons name="mail-outline" size={25} color="#292929" />
                        <CustomTextAndInput type="input" style={styles.inputField} placeholder='Enter Email' keyboardType="email-address" onChangeText={onChangeText} value={text} />
                    </View>

                    <View style={styles.inputBox}>
                        <SimpleLineIcons name="lock" size={24} color="black" />
                        <CustomTextAndInput type="input" style={styles.inputField} keyboardType="visible-password" placeholder='Enter Password' />
                    </View>

                    <TouchableOpacity style={styles.signUpButton} onPress={ () => {navigation.navigate('SubjectwiseResult')}}>
                        <CustomTextAndInput type="text" style={styles.signUpText}>Sign in</CustomTextAndInput>
                    </TouchableOpacity>

                    <View style={styles.dtHvAcc}>
                        <CustomTextAndInput type="text">Don't have account? </CustomTextAndInput>
                        <TouchableOpacity onPress={ () => {navigation.navigate('Registration')}}>
                            <CustomTextAndInput type='text' style={{ fontSize: 14, fontWeight: 'bold' }}>Sign up</CustomTextAndInput>
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
        height: 300,
        alignSelf: "center",
    },
    imageContainer: {
        padding: 20,
    },

    loginText: {
        fontSize: 30,
        fontWeight: "bold",
        color: COLORS.primary
    },
    inputField: {
        height: 50,
        flex: 1,
    },
    inputContainer: {
        gap: 20,
        padding: 10,
        marginTop: 12
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
        marginTop:8
    },
    signUpText:{
        color: '#fff', 
        fontWeight: 'bold', 
        fontSize: 16
    },
    dtHvAcc:{
        flexDirection: 'row',
        paddingHorizontal:10,
        justifyContent:'center'
    },
});

export default Login;
