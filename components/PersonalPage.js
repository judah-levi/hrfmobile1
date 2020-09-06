import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import NavBar from './NavBar';


export default function PersonalPage() {


    return(
        <View>
        <NavBar/>
        <View style={styles.wrapper}>
            <View>
                <TouchableOpacity style={styles.buttonavatar}>
                    <MaterialCommunityIcons style={styles.avatar} size={85} name="calendar-account" />
                </TouchableOpacity>
                <Text style={styles.avatartext}>TIME OFF</Text>
            </View>
            <View>
                <TouchableOpacity style={styles.buttonavatar}>
                    <AntDesign style={styles.avatar} size={85} name='team'  />
                </TouchableOpacity>
                <Text style={styles.avatartext}>MEETINGS</Text>
            </View>
            <View>
                <TouchableOpacity style={styles.buttonavatar}>
                    <AntDesign style={styles.avatar} size={85} name='deleteuser' />
                </TouchableOpacity>
                <Text style={styles.avatartext}>SICK DAY</Text>
            </View>
            <View>
                <TouchableOpacity style={styles.buttonavatar}>
                    <AntDesign style={styles.avatar} size={85} name='solution1'  />
                </TouchableOpacity>
                <Text style={styles.avatartext}>SURVEYS</Text>
            </View>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 50,
        margin: 10,
        flexDirection: 'row',
        justifyContent: "space-around",
        flexWrap: 'wrap',
        alignItems: "center",
      },
    avatar: {
        margin: 20,
        padding: 25,
        backgroundColor: '#00486D',
        color: 'white',
        borderRadius: 100
    },
    avatartext: {
        textAlign: 'center',
        fontWeight: 'bold'
    },
    buttonavatar: {
        
    }
})