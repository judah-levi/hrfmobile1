import React from "react";
import { Appbar, Avatar, Title } from 'react-native-paper';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from "@react-navigation/native";
import auth from '@react-native-firebase/auth'
import {StyleSheet, TouchableOpacity, Image, View} from "react-native";


export default function NavBar(){
    const navigation = useNavigation();


    return(
        <Appbar.Header style={styles.headerWrapper}>
            <Appbar style={styles.column1}>
            </Appbar>
            <Appbar style={styles.column2}>
            <TouchableOpacity onPress={() => navigation.navigate("MainPage")}>
                <MaterialCommunityIcon name="newspaper" style={styles.icons}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("PersonalPage")}>
                <MaterialCommunityIcon name="account-outline" style={styles.icons}/>
            </TouchableOpacity>
            <Image
                style={styles.image}
                source={require("../pics/HeaderLogo_180x.png")}
            />
            <TouchableOpacity onPress={() => navigation.navigate("BusinessPage")}>
                <MaterialCommunityIcon name="factory" style={styles.icons}/>
            </TouchableOpacity>
            {/* <TouchableOpacity >
                <MaterialCommunityIcon name="briefcase" style={styles.icons}/>
            </TouchableOpacity> */}
            {/* <TouchableOpacity>
                <MaterialIcon name="language" style={styles.icons}/>
            </TouchableOpacity> */}
            <TouchableOpacity onPress={() => auth().signOut()}>
                <MaterialCommunityIcon name="logout" style={styles.icons}/>
            </TouchableOpacity>
            </Appbar>
        </Appbar.Header>
    );
}


const styles = StyleSheet.create({
    headerWrapper:  {
        height: 'auto',
        backgroundColor: '#F9F7B7',
        alignItems: 'flex-end',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    column1:  {
        height: 'auto',
        width: '100%',
        backgroundColor: '#F9F7B7',
        alignItems: 'flex-end',
        justifyContent: 'space-around',
        flexDirection: 'row',
        paddingTop: 20,
        zIndex: 0

    },
    column2: {
        height: 'auto',
        width: '100%',
        backgroundColor: '#F9F7B7',
        alignItems: 'flex-end',
        justifyContent: 'space-around',
        flexDirection: 'row',
        paddingBottom: 20,
        zIndex: 0
    },
    icons:  {
        backgroundColor: '#F9F7B7',
        color: '#00486D',
        fontSize: 30
    },
    image:  {
        width: 50,
        height: 50,
        tintColor: '#00486D',
    }
})