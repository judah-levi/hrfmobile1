import React, {useState} from 'react'
import { StyleSheet, ScrollView, Text, View, TouchableOpacity } from 'react-native';
import CalendarTimeOff from './forms subcomponents/CalendarTimeOff';
import ImagePicker from 'react-native-image-picker'
import { TextInput } from 'react-native-paper';
import Navbar from '../NavBar'
// import CameraRoll from "@react-native-community/cameraroll"

function SickDay(){
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');

    const handleLibraryPhoto = () => {
        const options = {};
        ImagePicker.launchImageLibrary(options, response => {
            console.log('response', response)
        })
    }
    const handleShootPhoto = () => {
        const options = {};
        ImagePicker.launchCamera(options, response => {
            console.log('response', response)
        })
    }

    return(
        <ScrollView showsVerticalScrollIndicator={false}>
            <Navbar />
            <Text style={styles.hOneSickDay}>Sick day</Text>
            <View style={styles.sickDayWrapper}>
                <TextInput
                    style={styles.sickDayInput}
                    mode='outlined'
                    placeholder="First name"
                    value={firstname}
                    onChangeText={firstname => setFirstname(firstname)}
                />
                <TextInput
                    style={styles.sickDayInput}
                    mode='outlined'
                    placeholder="Last name"
                    value={lastname}
                    onChangeText={lastname => setLastname(lastname)}
                />
                <TouchableOpacity onPress={handleLibraryPhoto}>
                    <Text>Upload a picture</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleShootPhoto}>
                    <Text>Take a picture</Text>
                </TouchableOpacity>
                <CalendarTimeOff />
                <TouchableOpacity style={styles.btnSickDay}>
                    <Text style={styles.btnTextSickDay}>Submit</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    sickDayWrapper:{
        marginTop: '4%',
        marginLeft: 15,
        marginRight: 15
    },
    hOneSickDay: {
        fontSize: 30,
        textAlign: 'center',
        marginTop: '6%',
    },
    timeOffPicker: {
        backgroundColor: 'white',
        marginBottom: '3%'
    },
    sickDayInput: {
        marginBottom: '1%',
        backgroundColor: 'white'
    },
    btnSickDay: {
        marginTop: 10,
        borderRadius: 5,
    },
    btnTextSickDay: {
        backgroundColor: "#00486D",
        textAlign: 'center',
        padding: 15,
        borderRadius: 5,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },
})

export default SickDay