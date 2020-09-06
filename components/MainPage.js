import React from "react";
import { Avatar, Title } from 'react-native-paper';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import MyCarousel from './Carousel';
import NavBar from './NavBar'
import {
    StyleSheet,
    View,
    TouchableOpacity,
  } from "react-native";


export default function MainPage(){

    return(
        <View style={styles.mainWrapper}>
            <NavBar/>
            <Title>FUCK NICO</Title>
            {/* <MyCarousel/> */}
        </View>
    );
}


const styles = StyleSheet.create({
    mainWrapper: {
        flex: 6,
        backgroundColor: '#fff',
    },
  
})