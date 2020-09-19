import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import Navbar from '../NavBar'
import axios from 'axios';
import { useNavigation } from "@react-navigation/native";


function FacilitiesIssues(){
    const navigation = useNavigation();
    const [facilities, setFacilities] = React.useState('');
    const [formData, setFormData] = React.useState({});

    const handleSubmit = event =>  {
        event.preventDefault()
        console.log({data: formData})
        sendEmail()
        navigation.navigate("MainPage")
    }

    const sendEmail = () =>  {
        axios.post('https://us-central1-hrfmobile-5638b.cloudfunctions.net/submitFacilitiesIssue', formData)
    };

    return(
        <View>
            <Navbar />
            <Text style={styles.hOneFacilities}>Facilities issues</Text>
            <View style={styles.facilitiesWrapper}>
                <TextInput
                    theme={{ colors: { primary: "#00486D" }}}
                    selectionColor={'white'}
                    autoCapitalize="sentences"
                    underlineColorAndroid={'#00486D'}
                    name="description"
                    style={styles.facilitiesInput}
                    multiline={true}
                    numberOfLines={7}
                    placeholder="Describe the nature of the facilities issue that you have noticed:"
                    value={formData.description}
                    onChangeText={description => setFormData({...formData, description})}
                />
                <TouchableOpacity style={styles.btnFacilities} onPress={handleSubmit}>
                    <Text style={styles.btnTextFacilities}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    facilitiesWrapper:{
        marginTop: '4%',
        marginLeft: 15,
        marginRight: 15
    },
    hOneFacilities: {
        fontSize: 30,
        textAlign: 'center',
        marginTop: '6%',
    },
    facilitiesInput: {
        backgroundColor: 'white'
    },
    btnFacilities: {
        marginTop: 10,
        borderRadius: 5,
    },
    btnTextFacilities: {
        backgroundColor: "#00486D",
        textAlign: 'center',
        padding: 15,
        borderRadius: 5,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },
})

export default FacilitiesIssues