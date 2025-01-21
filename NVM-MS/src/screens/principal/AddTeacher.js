import { View, Text, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import CustomSearchBar from '../../customComponents/CustomSearchBar';
import { customStyle } from '../../custom/styles';

const AddTeacher = ({ navigation }) => {
    const [searchActive, setSearchActive] = useState(false);
    const [searchText, setSearchText] = useState(false);

    return (
        <SafeAreaView style={customStyle.container}>
            <CustomSearchBar
                navigation={navigation}
                labelText="Add Teachers"
            />
        </SafeAreaView>
    )
}

export default AddTeacher