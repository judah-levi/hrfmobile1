import React, {useState} from 'react'
import {StyleSheet, ScrollView, Text, View, TouchableOpacity } from 'react-native';
import {Picker} from '@react-native-community/picker';
import { TextInput } from 'react-native-paper';
import Navbar from '../NavBar'

function Meetings(){
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [phone, setPhone] = useState('');
    const [meeting, setMeeting] = useState('');

    return(
    
    <ScrollView showsVerticalScrollIndicator={false}>
        <Navbar />
        <Text style={styles.hOneMeeting}>Meetings</Text>
        <View style={styles.meetingWrapper}>
            <TextInput
                style={styles.meetingInput}
                mode='outlined'
                placeholder="First name"
                value={firstname}
                onChangeText={firstname => setFirstname(firstname)}
            />
            <TextInput
                style={styles.meetingInput}
                mode='outlined'
                placeholder="Last name"
                value={lastname}
                onChangeText={lastname => setLastname(lastname)}
            />
            <TextInput
                style={styles.meetingInput}
                mode='outlined'
                placeholder="Phone"
                value={phone}
                onChangeText={phone => setPhone(phone)}
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
                multiline={true}
                value={meeting}
                onChangeText={meeting => setMeeting(meeting)}
            />
            <TouchableOpacity style={styles.btnMeeting}>
                <Text style={styles.btnTextMeeting}>Submit</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    meetingWrapper:{
        marginTop: '4%',
        marginLeft: 15,
        marginRight: 15
    },
    hOneMeeting: {
        fontSize: 30,
        textAlign: 'center',
        marginTop: '6%',
    },
    meetingPicker: {
        backgroundColor: 'white',
        marginBottom: '2%'
    },
    meetingInput: {
        marginBottom: '2%',
        backgroundColor: 'white'
    },
    btnMeeting: {
        marginTop: 10,
        borderRadius: 5,
    },
    btnTextMeeting: {
        backgroundColor: "#00486D",
        textAlign: 'center',
        padding: 15,
        borderRadius: 5,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },
})

export default Meetings