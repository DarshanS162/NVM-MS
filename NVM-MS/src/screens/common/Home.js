import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { customStyle } from '../../custom/styles';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
const baseUrl = `http://192.168.1.36:5000/app`;

const Home = ({ navigation }) => {
  const [teacherData, setTeacherData] = useState({});

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('user');
      console.log("jsonValue......", jsonValue);
      if (jsonValue !== null) {
        const user = JSON.parse(jsonValue);
        console.log(user);
        console.log(`${baseUrl}/getTeacher/${user.teacher._id}`);
        const response = await axios.get(`${baseUrl}/getTeacher/${user.teacher._id}`);
        setTeacherData(response.data);
      }
    } catch (err) {
      console.error('Failed to load user from AsyncStorage', err.message);
    }
  };

  return (
    <SafeAreaView style={customStyle.container}>
      <ScrollView>
        <LinearGradient style={styles.teacherCard}
          colors={['#deb5e8', '#b9a8f8']}
          start={{ x: 0.9, y: 0.9 }}
          end={{ x: 0.2, y: 2 }}
        >
          <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>
              <View style={{ marginBottom: 10, flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                {teacherData.gender == 'Male' ? (<Text style={{ color: '#fff', fontSize: 18, marginBottom: 10 }}>Mr.</Text>) : 
                teacherData.gender == 'Female' ? (<Text style={{ color: '#fff', fontSize: 18, marginBottom: 10 }}>Ms.</Text>) :
                (<Text style={{ color: '#fff', fontSize: 18, marginBottom: 10 }}>Mx.</Text>)
                }
                <Text style={{ color: '#fff', fontSize: 18, marginBottom: 10 }}>{teacherData.fullName}</Text>
              </View>

              <Text style={{ color: '#fff', fontSize: 16, textAlign: 'left' }} >Class : {teacherData.class}  |  Div : {teacherData.div} </Text>
              <Text style={{ color: '#fff', fontSize: 16 }}>Faculty : Science</Text>
            </View>
            <View>
              <Image source={{ uri: "https://inventorymanagementdev.s3.us-east-1.amazonaws.com/defaultProfileImage.jpg" }} height={70} width={70} style={styles.image} />
            </View>
          </View>
        </LinearGradient>

        <View>

          <Text style={{ padding: 20, fontSize: 20 }}>Explore</Text>
          <View style={{ gap: 22 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
              <TouchableOpacity style={{ backgroundColor: '#d0cfff', paddingHorizontal: 25, paddingVertical: 10, borderRadius: 20, alignItems: 'center', gap: 5 }}
                onPress={() => navigation.navigate('StudentList')}>
                <View style={{ borderRadius: 100, backgroundColor: '#fff', padding: 20 }}>
                  <Image
                    source={require('../../../assets/students.png')}
                    style={styles.featureImg}
                  />
                </View>
                <Text>Students</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ backgroundColor: '#d0cfff', paddingHorizontal: 25, paddingVertical: 10, borderRadius: 20, alignItems: 'center', gap: 5 }}
                onPress={() => navigation.navigate('Teachers')}>
                <View style={{ borderRadius: 100, backgroundColor: '#fff', padding: 20 }}>
                  <Image
                    source={require('../../../assets/attendance.png')}
                    style={styles.featureImg}
                  />
                </View>
                <Text>Attendance</Text>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
              <TouchableOpacity style={{ backgroundColor: '#d0cfff', paddingHorizontal: 25, paddingVertical: 10, borderRadius: 20, alignItems: 'center', gap: 5 }}>
                <View style={{ borderRadius: 100, backgroundColor: '#fff', padding: 20 }}>
                  <Image
                    source={require('../../../assets/leave.png')}
                    style={styles.featureImg}
                  />
                </View>
                <Text>Leaves</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ backgroundColor: '#d0cfff', paddingHorizontal: 25, paddingVertical: 10, borderRadius: 20, alignItems: 'center', gap: 5 }}
             >
                <View style={{ borderRadius: 100, backgroundColor: '#fff', padding: 20 }}>
                  <Image
                    source={require('../../../assets/addMarks.png')}
                    style={styles.featureImg}
                  />
                </View>
                <Text>Add marks</Text>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
              <TouchableOpacity style={{ backgroundColor: '#d0cfff', paddingHorizontal: 25, paddingVertical: 10, borderRadius: 20, alignItems: 'center', gap: 5 }}
                onPress={() => navigation.navigate('ExamScreen')}
              >
                <View style={{ borderRadius: 100, backgroundColor: '#fff', padding: 20 }}>
                  <Image
                    source={require('../../../assets/terms.png')}
                    style={styles.featureImg}
                  />
                </View>
                <Text>Terms</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ backgroundColor: '#d0cfff', paddingHorizontal: 25, paddingVertical: 10, borderRadius: 20, alignItems: 'center', gap: 5 }}>
                <View style={{ borderRadius: 100, backgroundColor: '#fff', padding: 20 }}>
                  <Image
                    source={require('../../../assets/rankers.png')}
                    style={styles.featureImg}
                  />
                </View>
                <Text>Rankers</Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>

      </ScrollView>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  teacherCard: {
    paddingVertical: 25,
    borderRadius: 10,
    marginHorizontal: 12,
    paddingHorizontal: 20
  },
  image: {
    borderRadius: 50
  },
  featureImg: {
    height: 40,
    width: 40
  },
});

export default Home;

