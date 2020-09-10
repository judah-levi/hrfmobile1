import React, {useState, useEffect} from "react";
import { Avatar, Title, Text } from 'react-native-paper';
import NavBar from './NavBar'
import auth from '@react-native-firebase/auth'
import { useNavigation } from "@react-navigation/native";
import {
    StyleSheet,
    View,
    TouchableOpacity,
  } from "react-native";
import MyCarousel from "./Carousel";

  
  export default function MainPage() {


    return(
        <View style={styles.mainWrapper}>
            <NavBar/>
            {/* <Text>this is the main page</Text> */}
            <MyCarousel />
        </View>
    );
}


const styles = StyleSheet.create({
    mainWrapper: {
        flex: 6,
        backgroundColor: '#fff',
    },
  
})