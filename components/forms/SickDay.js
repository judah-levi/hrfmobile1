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
                <View style={styles.photos}>
                    <TouchableOpacity onPress={handleLibraryPhoto}>
                        <Text style={styles.left}>Upload a picture</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleShootPhoto}>
                        <Text style={styles.right}>Take a picture</Text>
                    </TouchableOpacity>
                </View>
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
    photos: {
        marginBottom: 5,
    },
    left: {
        color: 'black',
        padding: 5,
        fontWeight: 'bold',
        fontSize: 17
    },
    right: {
        color: 'black',
        padding: 5,
        fontWeight: 'bold',
        fontSize: 17
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