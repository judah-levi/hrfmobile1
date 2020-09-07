import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
// import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
// import Entypo from 'react-native-vector-icons/Entypo'
// import { useNavigation } from "@react-navigation/native";
import AdminNavBar from './AdminNavBar'

export default function AdminPage() {
    return(
        <View>
            <AdminNavBar/>
            <Text>This is the admin page</Text>
        </View>
    )
}