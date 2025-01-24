
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
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { SimpleLineIcons, EvilIcons } from '@expo/vector-icons';
import { Platform, StatusBar, TouchableOpacity } from 'react-native';
import { COLORS } from '../custom/styles';

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
        onPress={() => props.navigation.closeDrawer()}
      />
    </DrawerContentScrollView>
  );
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
      initialRouteName="NVM"
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
            height:45,
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
    </Stack.Navigator>
  )
}
export default AppNavigator