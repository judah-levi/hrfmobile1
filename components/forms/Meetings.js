import React, {useState} from 'react'
import {StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {Picker} from '@react-native-community/picker';
import { TextInput } from 'react-native-paper';
import Navbar from '../NavBar'

function Meetings(){
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [phone, setPhone] = useState('');
    const [meeting, setMeeting] = useState('');

    return(
    
    <View>
        <Navbar />
        <Text style={styles.hOneMeeting}>Meetings</Text>
        <View style={styles.meetingWrapper}>
            <TextInput
                style={styles.meetingInput}
                mode='outlined'
                placeholder="First name"
                textContentType
                value={firstname}
                onChangeText={firstname => setFirstname(firstname)}
            />
            <TextInput
                style={styles.meetingInput}
                mode='outlined'
                placeholder="Last name"
                value={lastname}
                onChangeText={lastname => setPhone(lastname)}
            />
            <TextInput
                style={styles.meetingInput}
                mode='outlined'
                placeholder="Phone"
                value={phone}
                onChangeText={phone => setLastname(phone)}
            />
            <Picker style={styles.meetingPicker}>
                <Picker.Item label='Ware house' value='ware house'/>
                <Picker.Item label='Bakery' value='bakery'/>
                <Picker.Item label='Dry pack' value='dry pack'/>
                <Picker.Item label='Dry mix' value='dry mix'/>
                <Picker.Item label='Maintenance' value='maintenance'/>
                <Picker.Item label='Mechanical' value='mechanical'/>
            </Picker>
            <Picker style={styles.meetingPicker}>
                <Picker.Item label='Person 1' value='person1'/>
                <Picker.Item label='Person 2' value='person2'/>
                <Picker.Item label='Person 3' value='person3'/>
            </Picker>
            <TextInput
                style={styles.meetingInput}
                mode='outlined'
                placeholder="Whats the meeting about?"
                value={meeting}
                onChangeText={meeting => setMeeting(meeting)}
            />
            <TouchableOpacity style={styles.btnMeeting}>
                <Text style={styles.btnTextMeeting}>Submit</Text>
            </TouchableOpacity>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    meetingWrapper:{
        marginTop: '7%',
        marginLeft: 15,
        marginRight: 15
    },
    hOneMeeting: {
        fontSize: 30,
        textAlign: 'center',
        marginTop: '10%',
        // fontWeight: 'bold'
    },
    meetingPicker: {
        backgroundColor: 'white',
        marginBottom: '3%'
    },
    meetingInput: {
        marginBottom: '3%',
        backgroundColor: 'white'
    },
    btnMeeting: {
        marginTop: '13%',
        backgroundColor: 'red',
        borderRadius: 2,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnTextMeeting: {
        backgroundColor: "#00486D",
        padding: 15,
        borderRadius: 4,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },
})

export default Meetings