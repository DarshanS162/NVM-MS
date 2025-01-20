import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Entypo, EvilIcons, SimpleLineIcons } from '@expo/vector-icons';
import CustomTextAndInput from "./CustomTextAndInput"

const CustomSearchBar = ({
  searchActive,
  handlesubmit,
  handleApplyFilter,
  setSearchText,
  searchText,
  setSearchActive,
  navigation,
  labelText,
  placeholderText
}) => {
  return (
    <View style={styles.topBar}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Entypo name="chevron-thin-left" size={24} color="#ffffff" />
      </TouchableOpacity>
      {searchActive ? (
        <CustomTextAndInput
        type="input"
          style={styles.searchInput}
          placeholder={placeholderText || "Search..."}
          value={searchText}
          onChangeText={setSearchText}
          selectionColor="#292929"
          autoFocus
          onSubmitEditing={(e) => handlesubmit(e)}
        />
      ) : (
        <CustomTextAndInput type="text" style={styles.title}>{labelText}</CustomTextAndInput>
      )}
      {searchActive ? (<TouchableOpacity onPress={() => {
        setSearchActive(!searchActive);
        setSearchText("");
        handleApplyFilter('');

      }}>
        <View >
          <CustomTextAndInput type="text" style={styles.filter}><EvilIcons name="close" size={24} color="#ffffff" /></CustomTextAndInput>
        </View>
      </TouchableOpacity>) :
        (<TouchableOpacity onPress={() => {
          setSearchActive(!searchActive);
        }
        }>
          <View >
            <CustomTextAndInput type="text" style={styles.filter}><SimpleLineIcons name="magnifier" size={24} color="#ffffff" /></CustomTextAndInput>
          </View>
        </TouchableOpacity>)}
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
    fontFamily: "Montserrat-Regular", // Apply the font to inputs
  },
  searchInput: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    marginHorizontal: 8,
    borderRadius: 4,
  },

});

export default CustomSearchBar