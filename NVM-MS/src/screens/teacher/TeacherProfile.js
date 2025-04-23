import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import CustomSearchBar from '../../customComponents/CustomSearchBar';
import AsyncStorage from '@react-native-async-storage/async-storage';
const baseUrl = `http://192.168.1.36:5000/app`;
import axios from "axios";
import { customStyle } from '../../custom/styles';

const TeacherProfile = ({ navigation }) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [teacherId, setTeacherId] = useState('');
  const [token, setToken] = useState('');
  const [teacher, setTeacher] = useState({
    fullName: '',
    phone: '',
    gender: 'Male',
    dob: new Date(),
    address: '',
    class: '',
    div: '',
    faculty: '',
  });

  const getUser = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('user');
      if (jsonValue !== null) {
        const user = JSON.parse(jsonValue);
        setTeacherId(user.teacher._id);
        setToken(user.token);
      }
    } catch (err) {
      console.error('Failed to load user from AsyncStorage', err.message);
    }
  };




  useEffect(() => {
    getUser();
  }, []);

  const handleChange = (key, value) => {
    setTeacher({ ...teacher, [key]: value, isCompleted: true, });
  };

  const handleSubmit = async () => {
    try {
      const updated = await axios.put(`${baseUrl}/updateTeacher/${teacherId}`, teacher, { headers: { Authorization: `Bearer ${token}` } });
      if (updated.status == 200) {
        navigation.navigate('Home');
      }
    } catch (error) {
      console.log("error while registering", error.message);
    }
  };

  return (

    <SafeAreaView style={customStyle.container}>
      <CustomSearchBar
        navigation={navigation}
        labelText="Your Profile"
      />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={{ gap: 8 }}>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={teacher.fullName}
            onChangeText={(text) => handleChange('fullName', text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Phone"
            keyboardType="phone-pad"
            maxLength={10}
            value={teacher.phone}
            onChangeText={(text) => handleChange('phone', text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Class"
            value={teacher.class}
            onChangeText={(text) => handleChange('class', text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Division"
            value={teacher.div}
            onChangeText={(text) => handleChange('div', text)}
          />
        </View>

        <Text style={styles.label}>Faculty</Text>
        <View style={styles.pickerContainer}>
          <Picker selectedValue={teacher.faculty} onValueChange={(value) => handleChange('faculty', value)}>
            <Picker.Item label="Select faculty" value="Arts" />
            <Picker.Item label="Arts" value="Arts" />
            <Picker.Item label="Commerce" value="Commerce" />
            <Picker.Item label="Science" value="Science" />
          </Picker>
        </View>

        <Text style={styles.label}>Gender</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={teacher.gender}
            onValueChange={(value) => handleChange('gender', value)}
          >
            <Picker.Item label="Male" value="Male" />
            <Picker.Item label="Female" value="Female" />
            <Picker.Item label="Other" value="Other" />
          </Picker>
        </View>

        <Text style={styles.label}>Date of Birth</Text>
        <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.dateButton}>
          <Text>{teacher.dob.toDateString()}</Text>
        </TouchableOpacity>

        {showDatePicker && (
          <DateTimePicker
            value={teacher.dob}
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
          value={teacher.address}
          multiline
          onChangeText={(text) => handleChange('address', text)}
        />

        <Button title="Submit" onPress={handleSubmit} color="#007AFF" />
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
});

export default TeacherProfile;
