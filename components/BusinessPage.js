import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from "@react-navigation/native";
import NavBar from './NavBar';

export default function BusinessPage() {
    const navigation = useNavigation();


    return(
        <View style={styles.pageWrapper}>
        <NavBar/>
        <View style={styles.wrapper}>
            <View>
                <TouchableOpacity style={styles.buttonavatar} onPress={() => navigation.navigate("EquipmentFailuresForm")}>
                    <MaterialCommunityIcon style={styles.avatar} size={85} name="robot-industrial" />
                </TouchableOpacity>
                <Text style={styles.avatartext}>EQUIPMENT FAILURE</Text>
            </View>
            <View>
                <TouchableOpacity style={styles.buttonavatar} onPress={() => navigation.navigate("FacilitiesIssuesForm")}>
                    <Entypo style={styles.avatar} size={85} name='tools'  />
                </TouchableOpacity>
                <Text style={styles.avatartext}>FACILITIES ISSUES</Text>
            </View>
            <View style={styles.belows}>
                <TouchableOpacity style={styles.buttonavatar} onPress={() => navigation.navigate("MaterialsNeededForm")}>
                    <MaterialIcon style={styles.avatar} size={85} name='add-shopping-cart'/>
                </TouchableOpacity>
                <Text style={styles.avatartext}>MATERIALS NEEDED</Text>
            </View>
            <View style={styles.belows}>
                <TouchableOpacity style={styles.buttonavatar} onPress={() => navigation.navigate("SuggestionForm")}>
                    <Entypo style={styles.avatar} size={85} name='light-bulb'  />
                </TouchableOpacity>
                <Text style={styles.avatartext}>SUGGESTIONS</Text>
            </View>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    pageWrapper:  {
        height: '100%',
    },
    wrapper: {
        marginTop: 100,
        margin: 10,
        flexDirection: 'row',
        justifyContent: "space-around",
        flexWrap: 'wrap',
        alignItems: "center",
      },
    avatar: {
        marginRight: 20,
        marginLeft: 20, 
        paddingTop: 25,
        color: '#E6BE8A',
    },
    avatartext: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#00486D'
    },
    belows: {
        marginTop: 65
    }
})