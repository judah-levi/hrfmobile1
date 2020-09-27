import React, {useState} from 'react'
import {StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TextInput, RadioButton } from 'react-native-paper';
import Navbar from './NavBar'
import axios from 'axios';
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from 'react-native-gesture-handler';

function CovidPage(){
    const navigation = useNavigation();

    const sendEmail = () =>  {
        axios.post('https://us-central1-hrfmobile-5638b.cloudfunctions.net/submitCovidForm', formData)
    };

    const handleSubmit = event =>  {
        event.preventDefault()
        console.log({data: formData})
        sendEmail()
        navigation.navigate("MainPage")
    }

    return(
        <ScrollView>
        <View>
            <Navbar />
            <Text style={styles.p}>
                Hudson River Foods cares about the safety and health of it's entire workforce community. We are committed to 
                ensuring that our facilities continue to support productive and healthy lifestyles for all of our staff. It is 
                due to this that during the world-wide COVID-19 pandemic we ask that before arriving to work, you please verify your health status. {"\n"}
            </Text>
            <Text style={styles.p}>
                Hudson River Foods se preocupa por la seguridad y la salud de toda su comunidad laboral. Estamos comprometidos a asegurar que nuestras instalaciones continúen 
                apoyando estilos de vida productivos y saludables para todo nuestro personal. Debido a esto, durante la pandemia mundial de COVID-19, le pedimos que 
                antes de llegar al trabajo verifique su estado de salud.     {"\n"}
                {"\n"}
            </Text> 
            <View style={styles.buttonWrapper}>
                <TouchableOpacity style={styles.col1} onPress={() => navigation.navigate('CovidFormEn')}>
                    <Text style={styles.btnText}>Form in English</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.col2} onPress={() => navigation.navigate('CovidFormEs')}>
                    <Text style={styles.btnText}>Forma en Español</Text>
                </TouchableOpacity>
            </View>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    p: {
        fontSize: 15,
        textAlign: 'left',
        margin: 20, 
        marginBottom: 0
    },
    btnText: {
        backgroundColor: "#00486D",
        textAlign: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 5,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
        height: 50
    },
    buttonWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    col1:  {
        width:'47%',
    }, 
    col2:  {
        width: '47%',
    },
})

export default CovidPage