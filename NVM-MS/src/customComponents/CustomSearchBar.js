import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, TextInput} from 'react-native';
import { Entypo, EvilIcons, SimpleLineIcons } from '@expo/vector-icons';

const CustomSearchBar = ({
  searchActive,
  handlesubmit,
  handleApplyFilter,
  setSearchText,
  searchText,
  setSearchActive,
  navigation,
  labelText,
  placeholderText,
  search
}) => {
  return (
    <View style={styles.topBar}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Entypo name="chevron-thin-left" size={24} color="#ffffff" />
      </TouchableOpacity>
      {searchActive ? (
        <TextInput
          style={styles.searchInput}
          placeholder={placeholderText || "Search..."}
          value={searchText}
          onChangeText={setSearchText}
          selectionColor="#292929"
          autoFocus
          onSubmitEditing={(e) => handlesubmit(e)}
        />
      ) : (
    
        <Text  style={styles.title}>{labelText}</Text>
      )}
      {searchActive ? (<TouchableOpacity onPress={() => {
        setSearchActive(!searchActive);
        setSearchText("");
        handleApplyFilter('');

      }}>
        <View >
          <Text style={styles.filter}><EvilIcons name="close" size={24} color="#ffffff" /></Text>
        </View>
      </TouchableOpacity>) :(
          search ?(
            <TouchableOpacity onPress={() => {
              setSearchActive(!searchActive);
            }
            }>
              <View >
                <Text style={styles.filter}><SimpleLineIcons name="magnifier" size={24} color="#ffffff" /></Text>
              </View>
            </TouchableOpacity>):(
              <Text></Text>
            )
          
          )}
    </View>
  )
}
const styles = StyleSheet.create({
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    height: 45,
    backgroundColor: "#8569F4",
  },
  title: {
    color: "#ffffff",
    fontSize: 18,
    fontFamily: "Montserrat-Regular", 
  },
  searchInput: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    marginHorizontal: 8,
    borderRadius: 4,
    fontFamily:"Montserrat-Regular"
  },

});

export default CustomSearchBar