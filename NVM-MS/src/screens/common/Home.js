import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { customStyle } from '../../custom/styles'

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={customStyle.container}>
      <TouchableOpacity onPress={()=>navigation.navigate("Teachers")}>
        <Text style={{fontFamily:"Montserrat-Regular"}}>
          teacher
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("ExamScreen")}>
        <Text>
          Ranks
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("ExamScreen")}>
        <Text>
          Terms
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
};

export default Home;