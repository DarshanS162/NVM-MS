
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/common/Home'
import Login from '../screens/common/Login';
import Registration from '../screens/common/Registration';
import TeachersList from '../screens/principal/TeachersList';
import AddTeacher from '../screens/principal/AddTeacher';
import SubjectwiseResult from '../screens/teacher/SubjectwiseResult';
import ExamScreen from '../screens/teacher/ExamScreen';
const Stack = createStackNavigator();
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import { SimpleLineIcons, EvilIcons } from '@expo/vector-icons';
import { StatusBar, TouchableOpacity } from 'react-native';
import { COLORS } from '../custom/styles';
import StudentProfile from '../screens/student/StudentProfile';

import TeacherProfile from '../screens/teacher/TeacherProfile';
import StudentList from '../screens/teacher/StudentList';
import AsyncStorage from '@react-native-async-storage/async-storage';

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      {/* <DrawerItemList {...props} /> */}
      <DrawerItem
        label="Dashboard"
        onPress={() => props.navigation.navigate("Home")}
      />
      <DrawerItem
        label="Logout"
        onPress={() => {logout;
          props.navigation.navigate("Login")}
        }
      />
    </DrawerContentScrollView>
  );
}

const logout = async () => {
  try {
    AsyncStorage.setItem('user', '');
    return { message: 'Logged out successfully' };
  } catch (error) {
    return { message: 'Error logging out', error: error.message };
  }
}

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <>
      {/* Customizing the StatusBar */}
      <StatusBar
        barStyle="default"
      />
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen
          name="NVM"
          component={HomeScreen}
          options={({ navigation }) => ({
            headerTitleAlign: "center",
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <SimpleLineIcons name="menu" size={22} color="#fff" />
              </TouchableOpacity>
            ),
            headerLeftContainerStyle: {
              paddingLeft: 15,
            },
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate("ExamScreen")}>
                <EvilIcons name="bell" size={26} color="#fff" />
              </TouchableOpacity>
            ),
            headerRightContainerStyle: {
              paddingRight: 15,
            },
            headerTitleStyle: {
              fontFamily: "Montserrat-Regular",
              color: "#FFF",
              fontSize: 18,
              textTransform: "capitalize",
            },
            headerStyle: {
              backgroundColor: COLORS.primary,
            },
          })}
        />
      </Drawer.Navigator>
    </>
  );
}
const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={DrawerNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Registration" component={Registration} options={{ headerShown: false }} />
      <Stack.Screen name="Teachers" component={TeachersList} options={{ headerShown: false }} />
      <Stack.Screen name="AddTeachers" component={AddTeacher} options={{ headerShown: false }} />
      <Stack.Screen name="SubjectwiseResult" component={SubjectwiseResult} options={{ headerShown: false }} />
      <Stack.Screen name="ExamScreen" component={ExamScreen} options={{ headerShown: false }} />
      <Stack.Screen name="StudentProfile" component={StudentProfile} options={{ headerShown: false }}/>
      <Stack.Screen name="TeacherProfile" component={TeacherProfile} options={{ headerShown: false }}/>
      <Stack.Screen name="StudentList" component={StudentList} options={{ headerShown: false }}/>
    </Stack.Navigator>
  )
}
export default AppNavigator