import React from "react";
import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import { Ionicons} from '@expo/vector-icons';

const CustomHeader = ({ title, navigation }) => {
  return (
    <View>
      {/* Status Bar Fix */}
      <StatusBar hidden={false} barStyle="dark-content" backgroundColor="#fff" />

      {/* Custom Header */}
      <View
        style={{
          height: 45,
          backgroundColor: "#fff",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center", // Title center align
          borderBottomWidth: 0, // No border
          elevation: 0, // Remove shadow (Android)
          shadowOpacity: 0, // Remove shadow (iOS)
        }}
      >
        {/* Left: Back Button */}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ position: "absolute", left: 15 }}
        >
           <Ionicons name="chevron-back" size={25} color="#292929" />
        </TouchableOpacity>

        {/* Center: Title */}
        <Text
          style={{
            fontFamily: "Montserrat-Regular",
            fontSize: 18,
            color: "#292929",
          }}
        >
          {title}
        </Text>
      </View>
    </View>
  );
};

export default CustomHeader;
