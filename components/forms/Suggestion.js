import React, {useState} from 'react'
import {StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import Navbar from '../NavBar'

function Suggestion(){
    const [fn, setFn] = useState('');
    const [ln, setLn] = useState('');
    const [suggestions, setSuggestions] = useState('');

    return(
        <View>
            <Navbar />
            <Text style={styles.hOneSuggestion}>Suggestion</Text>
            <View style={styles.suggestionWrapper}>
               <TextInput
                    style={styles.suggestionInput}
                    mode='outlined'
                    placeholder="First name"
                    value={fn}
                    onChangeText={fn => setFn(fn)}
                />
                <TextInput
                    style={styles.suggestionInput}
                    mode='outlined'
                    placeholder="Last name"
                    value={ln}
                    onChangeText={ln => setLn(ln)}
                />
                <TextInput
                    style={styles.suggestionInput}
                    mode='outlined'
                    placeholder="Make your suggestion"
                    multiline={true}
                    value={suggestions}
                    onChangeText={suggestions => setSuggestions(suggestions)}
                />
                <TouchableOpacity style={styles.btnSuggestion}>
                    <Text style={styles.btnTextSuggestion}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    suggestionWrapper:{
        marginTop: '10%',
        marginLeft: 15,
        marginRight: 15
    },
    hOneSuggestion: {
        fontSize: 30,
        textAlign: 'center',
        marginTop: '10%',
        // fontWeight: 'bold'
    },
    suggestionInput: {
        backgroundColor: 'white',
        marginBottom: '3%'
    },
    btnSuggestion: {
        marginTop: '18%',
        backgroundColor: 'red',
        borderRadius: 2,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnTextSuggestion: {
        backgroundColor: "#00486D",
        padding: 15,
        borderRadius: 4,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },
})

export default Suggestion