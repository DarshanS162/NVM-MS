import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Image, View, TouchableOpacity, ScrollView, TextInput, Text } from 'react-native';
import { customStyle, COLORS } from '../../custom/styles';
import RegisterImage from "../../../assets/register.png"
import { Ionicons, SimpleLineIcons} from '@expo/vector-icons';

const Registration = ({ navigation }) => {
    const [text, onChangeText] = useState('');
    return (
        <SafeAreaView style={customStyle.container}>
            <ScrollView style={{ padding: 20, flex: 1 }}>
                <View style={styles.imageContainer}>
                    <Image source={RegisterImage} style={styles.image} />
                </View>

                <Text style={styles.loginText}>Register</Text>
                <Text style={{fontFamily:"Montserrat-Regular"}}>Please register to login</Text>
                <View style={styles.inputContainer}>
                    <View style={styles.inputBox}>
                        <Ionicons name="mail-outline" size={25} color="#292929" />
                        <TextInput style={styles.inputField}  keyboardType="email-address" placeholder='Enter Email' onChangeText={onChangeText} value={text} />
                    </View>

                    <View style={styles.inputBox}>
                    <SimpleLineIcons name="phone" size={24} color="black" />
                        <TextInput style={styles.inputField} keyboardType="phone-pad" placeholder='Enter Mobile Number' onChangeText={onChangeText} value={text} />
                    </View>

                    <View style={styles.inputBox}>
                        <SimpleLineIcons name="lock" size={24} color="#292929" />
                        <TextInput style={styles.inputField} keyboardType="visible-password" placeholder='Enter Password' />
                    </View>

                    <TouchableOpacity style={styles.signUpButton}>
                        <Text style={styles.signUpText}>Sign up</Text>
                    </TouchableOpacity>

                    <View style={styles.dtHvAcc}>
                        <Text style={{fontFamily:"Montserrat-Regular"}}>already have account? </Text>
                        <TouchableOpacity onPress={() => { navigation.navigate('Login') }}>
                            <Text style={{ fontSize: 14, fontWeight: 'bold',fontFamily:"Montserrat-Regular" }}>Sign in</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
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
        color: COLORS.primary,
        fontFamily:"Montserrat-Regular"
    },
    inputField: {
        height: 50,
        flex: 1,
        fontFamily:"Montserrat-Regular"
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
        fontFamily:"Montserrat-Regular"
    },
    dtHvAcc: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        justifyContent: 'center'
    },
});

export default Registration;
