import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Platform, StatusBar, Image, View, TextInput } from 'react-native';
import { customStyle, COLORS } from '../../custom/styles';
import loginImage from "../../../assets/login.png"
import CustomTextAndInput from "../../customComponents/CustomTextAndInput"
import { Ionicons } from '@expo/vector-icons'; // Import FontAwesome

const Login = () => {
    const [text, onChangeText] = useState('');
    return (
        <SafeAreaView style={customStyle.container}>
            <View style={{ padding: 20 }}>
                <View style={styles.imageContainer}>
                    <Image source={loginImage} style={styles.image} />
                </View>

                <CustomTextAndInput type="text" style={styles.loginText}>Login</CustomTextAndInput>
                <CustomTextAndInput type="text">Please Sign in to continue</CustomTextAndInput>
                <View style={styles.inputContainer}>
                <Ionicons name="mail-outline" size={50} color="#f39c12" /> 
                    <CustomTextAndInput type="input" style={styles.inputField} placeholder='Enter Email' onChangeText={onChangeText} value={text} />
                    <CustomTextAndInput type="input" style={styles.inputField} placeholder='Enter Password' />

                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 270,
        height: 270,
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
        backgroundColor: "#ededed",
        height: 50,
        borderRadius: 10,
        paddingHorizontal: 12
    },
    inputContainer: {
        flex: 1,
        gap: 20,
        padding: 20,
        paddingTop: 30,
    }

});

export default Login;
