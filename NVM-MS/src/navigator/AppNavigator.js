
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

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
      <Stack.Screen name="Registration" component={Registration} options={{headerShown:false}} />
      <Stack.Screen name="Teachers" component={TeachersList}  options={{headerShown:false}}  />
      <Stack.Screen name="AddTeachers" component={AddTeacher}  options={{headerShown:false}}  />
      <Stack.Screen name="SubjectwiseResult" component={SubjectwiseResult}  options={{headerShown:false}}  />
      <Stack.Screen name="ExamScreen" component={ExamScreen}  options={{headerShown:false}}  />
    </Stack.Navigator>
  )
}
export default AppNavigator