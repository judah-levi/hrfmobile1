import React, {useState} from 'react'
import {StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import Navbar from '../NavBar'
import axios from 'axios';
import { useNavigation } from "@react-navigation/native";

function Suggestion(){
    const navigation = useNavigation();
    const [fn, setFn] = useState('');
    const [ln, setLn] = useState('');
    const [suggestion, setSuggestion] = useState('');
    const [formData, setFormData] = React.useState({});

    const sendEmail = () =>  {
        axios.post('https://us-central1-hrfmobile-5638b.cloudfunctions.net/submitSuggestion', formData)
    };

    const handleSubmit = event =>  {
        event.preventDefault()
        console.log({data: formData})
        sendEmail()
        navigation.navigate("MainPage")
    }

    return(
        <View>
            <Navbar />
            <Text style={styles.hOneSuggestion}>Suggestion</Text>
            <View style={styles.suggestionWrapper}>
               <TextInput
                    name="firstname"
                    style={styles.suggestionInput}
                    mode='outlined'
                    placeholder="First name"
                    value={formData.firstname}
                    onChangeText={firstname => setFormData({...formData, firstname})}
                />
                <TextInput
                    name="lastname"
                    style={styles.suggestionInput}
                    mode='outlined'
                    placeholder="Last name"
                    value={formData.lastname}
                    onChangeText={lastname => setFormData({...formData, lastname})}
                />
                <TextInput
                    name="suggestion"
                    style={styles.suggestionInput}
                    mode='outlined'
                    placeholder="Make your suggestion"
                    multiline={true}
                    value={formData.suggestion}
                    onChangeText={suggestion => setFormData({...formData, suggestion})}
                />
                <TouchableOpacity style={styles.btnSuggestion} onPress={handleSubmit}>
                    <Text style={styles.btnTextSuggestion}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    suggestionWrapper:{
        marginTop: '4%',
        marginLeft: 15,
        marginRight: 15
    },
    hOneSuggestion: {
        fontSize: 30,
        textAlign: 'center',
        marginTop: '6%',
    },
    suggestionInput: {
        backgroundColor: 'white',
        marginBottom: '1%'
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
        fontSize: 20
    },
})

export default Suggestion