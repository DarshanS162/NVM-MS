import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View>
      <TouchableOpacity>
        <Text>
          teacher
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>
          Ranks
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>
          Terms
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home