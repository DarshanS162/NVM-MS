import { View, SafeAreaView, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CustomSearchBar from '../../customComponents/CustomSearchBar';
import { COLORS, customStyle } from '../../custom/styles';
import CustomTextAndInput from '../../customComponents/CustomTextAndInput';
import * as ImagePicker from "expo-image-picker";
import { Dropdown } from 'react-native-element-dropdown';
import {AntDesign } from "@expo/vector-icons";
import { useFonts } from 'expo-font';
const AddTeacher = ({ navigation }) => {
    const [text, onChangeText] = useState("");
    const [faculty, setFaculty] = useState("");
      const [fontsLoaded] = useFonts({
        'Montserrat-Regular': require('../../custom/fonts/Montserrat-Regular.ttf'),
      });

    const [image, setImage] = useState("https://inventorymanagementdev.s3.us-east-1.amazonaws.com/defaultProfileImage.jpg");   
    const data = [
        { label: 'Science', value: '1' },
        { label: 'Commerce', value: '2' },
        { label: 'Arts', value: '3' },

      ];
    
    const handleImageUpload = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
        if (!result.canceled) {
          setImage(result.assets[0].uri);
        }
      };
    return (
        <SafeAreaView style={customStyle.container}>
            <CustomSearchBar
                navigation={navigation}
                labelText="Add Teachers"
            />
            <ScrollView >
                <View style={styles.innerContainer}>

                    <TouchableOpacity style={{ alignSelf: "center", gap: 10 }}  onPress={handleImageUpload}>
                        <CustomTextAndInput style={{ alignSelf: "center", fontSize: 18 }} type="text">Profile Photo</CustomTextAndInput>
                        <Image source={{ uri:image }}
                            height={150} width={150} style={styles.image} />
                    </TouchableOpacity>

                    <View style={styles.singleInput}>
                        <CustomTextAndInput type="text" style={styles.label}>Full Name</CustomTextAndInput>
                        <CustomTextAndInput style={styles.input} type="input" placeholder='Eg. Darshan Devidas Salunkhe ' onChangeText={onChangeText} value={text} />
                    </View>
                    <View style={styles.twoInput}>

                        <View style={styles.labelInput}>
                            <CustomTextAndInput type="text" style={styles.label}>Class</CustomTextAndInput>
                            <CustomTextAndInput style={styles.input} type="input" placeholder='Eg. 12' onChangeText={onChangeText} value={text} />
                        </View>

                        <View style={styles.labelInput}>
                            <CustomTextAndInput type="text" style={styles.label}>Division</CustomTextAndInput>
                            <CustomTextAndInput style={styles.input} type="input" placeholder='Eg. A' onChangeText={onChangeText} value={text} />
                        </View>

                    </View>
                    <View style={styles.singleInput}>
                        <CustomTextAndInput type="text" style={styles.label}>Faculty</CustomTextAndInput>
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
                          style={[styles.input,{padding:10}]}
                        />
                    </View>
                    <View style={styles.singleInput}>
                        <CustomTextAndInput type="text" style={styles.label}>Email Id</CustomTextAndInput>
                        <CustomTextAndInput style={styles.input} type="input" keyboardType="email-address" placeholder='Eg. Eample@gmail.com' onChangeText={onChangeText} value={text} />
                    </View>
                    <View style={styles.singleInput}>
                        <CustomTextAndInput type="text" style={styles.label}>Phone Number</CustomTextAndInput>
                        <CustomTextAndInput style={styles.input} type="input" keyboardType="phone-pad" placeholder='Eg. 9638527410' onChangeText={onChangeText} value={text} />
                    </View>


                    <TouchableOpacity style={styles.saveButton}>
                        <CustomTextAndInput type="text" style={styles.saveButtonText}>Save</CustomTextAndInput>
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
    },
    input: {
        backgroundColor: COLORS.background,
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: COLORS.primaryBorder,
        paddingLeft:10,
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
        color: "#fff"
    },
    placeholderStyle:{
      color:"#8e8e8e",
      fontFamily:"Montserrat-Regular",
    },
    selectedTextStyle:{
        fontFamily:"Montserrat-Regular",
    }


});

export default AddTeacher