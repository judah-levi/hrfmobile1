import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity, Title } from 'react-native';
import AdminNavBar from './adminNavBar'
import { useAndroidBackHandler } from "react-navigation-backhandler";

export default function AdminPage() {
    useAndroidBackHandler(()=> {
        return true
    });

    return(
        <View>
            <AdminNavBar/>
            <View style={styles.fontwrapper}>
                <Text style={styles.welcome}>
                    Welcome to the admin console. 
                    This is an early-stage 
                    test version of your app. At this time you can only access 
                    the news updating form. Whenenver you have an update for your organization 
                    just click the button above and fill out the form!
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    welcome:  {
        fontWeight: 'bold',
        lineHeight: 25,
    },
    fontwrapper: {
        alignItems: 'center',
        padding: 30,

    }
})