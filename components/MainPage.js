import React, {useState, useEffect} from "react";
import { Avatar, Title, Text } from 'react-native-paper';
import MyCarousel from './Carousel';
import NavBar from './NavBar'
import auth from '@react-native-firebase/auth'
import { useNavigation } from "@react-navigation/native";
import {
    StyleSheet,
    View,
    TouchableOpacity,
  } from "react-native";

  
  export default class MainPage extends React.Component {
   state = { 
       currentUser: null,
    }

   componentDidMount()  {
       const { currentUser } = auth()
       this.setState({currentUser})
   }


   render()  {
    const {currentUser} = this.state

    return(
        <View style={styles.mainWrapper}>
            <NavBar/>
            {/* <MyCarousel/> */}
        </View>
    );
    }
}


const styles = StyleSheet.create({
    mainWrapper: {
        flex: 6,
        backgroundColor: '#fff',
    },
  
})