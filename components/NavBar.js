import React from "react";
import { Appbar, Avatar, Title } from 'react-native-paper';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from "@react-navigation/native";
import {
    StyleSheet,
    TouchableOpacity,
  } from "react-native";


export default function NavBar(){
    const navigation = useNavigation();


    return(
        <Appbar.Header style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate("MainPage")}>
                <MaterialCommunityIcon name="newspaper" style={styles.icons}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("PersonalPage")}>
                <MaterialCommunityIcon name="account-outline" style={styles.icons}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("BusinessPage")}>
                <MaterialCommunityIcon name="factory" style={styles.icons}/>
            </TouchableOpacity>
            <TouchableOpacity >
                <MaterialCommunityIcon name="briefcase" style={styles.icons}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <MaterialIcon name="language" style={styles.icons}/>
            </TouchableOpacity>
        </Appbar.Header>
    );
}


const styles = StyleSheet.create({
    mainWrapper: {
        flex: 6,
        backgroundColor: '#fff',
    },
    header:  {
        height: 90,
        backgroundColor: '#F9F7B7',
        alignItems: 'flex-end',
        justifyContent: 'space-around',
        flexDirection: 'row',
        paddingBottom: 20
    },
    icons:  {
        backgroundColor: '#F9F7B7',
        color: '#00486D',
        fontSize: 30
    },
})