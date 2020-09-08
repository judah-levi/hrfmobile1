import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import AdminNavBar from './adminNavBar'
export default function AdminPage() {
    return(
        <View>
            <AdminNavBar/>
            <Text>This is the admin page</Text>
        </View>
    )
}