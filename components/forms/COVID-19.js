import React, {useState} from 'react'
import {StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import Navbar from '../NavBar'
import axios from 'axios';
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from 'react-native-gesture-handler';

function CovidForm(){
    const navigation = useNavigation();
    const [fn, setFn] = useState('');
    const [ln, setLn] = useState('');
    const [suggestion, setSuggestion] = useState('');
    const [formData, setFormData] = React.useState({ timeStamp:new Date()});

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
            <Text style={styles.hOneSuggestion}>HRF COVID-19 HEALTH DECLERATION</Text>
            <Text style={styles.p}>
                Hudson River Foods cares about the safety and health of it's entire workforce community. We are committed to 
                ensuring that our facilities continue to support productive and healthy lifestyles for all of our staff. It is 
                due to this that during the world-wide COVID-19 pandemic we ask that before arriving to work, you please verify your health status. {"\n"}
                {"\n"}
                By signing this form, you hereby delcare the following: {"\n"}
                {"\n"}
                1. Your temperature is not higher than 37C or 99F. {"\n"}
                {"\n"}
                2. You have not had a fever of 37C or 99F at any point during the last week. {"\n"}
                {"\n"}
                3. You do not have a cough (*except related to chronic asthma or allergies).{"\n"}
                {"\n"}
                4. You have not been in contact with someone with COVID-19 in the past 14 days.{"\n"}
                {"\n"}
                5. You take full responsibility for arriving to work during the COVID-19 epidemic, especially if I have a pre-existing health condition, 
                    and hereby indemnify Hudson River Foods of any liability related to the health risks associated with COVID-19. {"\n"}
                {"\n"}
                6. If you come into contact with a carrier of COVID-19, from this day forward, you will immediately notify Hudson River Foods, and will remain in isloation. {"\n"}
            </Text>
            <View style={styles.suggestionWrapper}>
               <TextInput
                    theme={{ colors: { primary: "#00486D" }}}
                    selectionColor={'white'}
                    autoCapitalize="words"
                    underlineColorAndroid={'#00486D'}                    
                    name="firstname"
                    style={styles.suggestionInput}
                    placeholder="First name"
                    value={formData.firstname}
                    onChangeText={firstname => setFormData({...formData, firstname})}
                />
                <TextInput
                    theme={{ colors: { primary: "#00486D" }}}
                    name="lastname"
                    style={styles.suggestionInput}
                    placeholder="Last name"
                    value={formData.lastname}
                    autoCapitalize="words"
                    selectionColor={'white'}
                    underlineColorAndroid={'#white'}                    
                    onChangeText={lastname => setFormData({...formData, lastname})}
                />
                <TouchableOpacity style={styles.btnSuggestion} onPress={handleSubmit}>
                    <Text style={styles.btnTextSuggestion}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    suggestionWrapper:{
        marginTop: '4%',
        marginLeft: 15,
        marginRight: 15,
        height: '100%'
    },
    hOneSuggestion: {
        fontSize: 23,
        textAlign: 'center',
        marginTop: '6%',
    },
    p: {
        fontSize: 15,
        textAlign: 'left',
        marginTop: '6%',
        marginLeft: 15, 
        marginRight: 15
    },
    suggestionInput: {
        backgroundColor: 'white',
        marginBottom: '1%',
        fontSize: 13,
    },
    btnSuggestion: {
        marginTop: 10,
        borderRadius: 2,
    },
    btnTextSuggestion: {
        backgroundColor: "#00486D",
        textAlign: 'center',
        padding: 15,
        borderRadius: 4,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15
    },
})

export default CovidForm