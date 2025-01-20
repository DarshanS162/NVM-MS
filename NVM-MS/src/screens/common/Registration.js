import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Platform, StatusBar, Image, View, TextInput, TouchableOpacity, Text } from 'react-native';
import { customStyle, COLORS } from '../../custom/styles';
import RegisterImage from "../../../assets/register.png"
import CustomTextAndInput from "../../customComponents/CustomTextAndInput"
import { Ionicons, SimpleLineIcons,FontAwesome} from '@expo/vector-icons';

const Registration = ({ navigation }) => {
    const [text, onChangeText] = useState('');
    return (
        <SafeAreaView style={customStyle.container}>
            <View style={{ padding: 20, flex: 1 }}>
                <View style={styles.imageContainer}>
                    <Image source={RegisterImage} style={styles.image} />
                </View>

                <CustomTextAndInput type="text" style={styles.loginText}>Register</CustomTextAndInput>
                <CustomTextAndInput type="text">Please register to login</CustomTextAndInput>
                <View style={styles.inputContainer}>
                    <View style={styles.inputBox}>
                        <Ionicons name="mail-outline" size={25} color="#292929" />
                        <CustomTextAndInput type="input" style={styles.inputField} placeholder='Enter Email' onChangeText={onChangeText} value={text} />
                    </View>

                    <View style={styles.inputBox}>
                    <SimpleLineIcons name="phone" size={24} color="black" />
                        <CustomTextAndInput type="input" style={styles.inputField} placeholder='Enter Mobile Number' onChangeText={onChangeText} value={text} />
                    </View>

                    <View style={styles.inputBox}>
                        <SimpleLineIcons name="lock" size={24} color="#292929" />
                        <CustomTextAndInput type="input" style={styles.inputField} placeholder='Enter Password' />
                    </View>

                    <TouchableOpacity style={styles.signUpButton}>
                        <CustomTextAndInput type="text" style={styles.signUpText}>Sign up</CustomTextAndInput>
                    </TouchableOpacity>

                    <View style={styles.dtHvAcc}>
                        <CustomTextAndInput type="text">already have account? </CustomTextAndInput>
                        <TouchableOpacity onPress={() => { navigation.navigate('Login') }}>
                            <CustomTextAndInput type='text' style={{ fontSize: 14, fontWeight: 'bold' }}>Sign in</CustomTextAndInput>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    image: {
        width:300,
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
        height: 50,
        flex: 1,
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
        fontSize: 16
    },
    dtHvAcc: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        justifyContent: 'center'
    },
});

export default Registration;
