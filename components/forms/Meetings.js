import React, {useState} from 'react'
import {StyleSheet, ScrollView, Text, View, TouchableOpacity } from 'react-native';
import {Picker} from '@react-native-community/picker';
import { TextInput } from 'react-native-paper';
import Navbar from '../NavBar'
import {Axios} from '../../firebase/firebaseConfig';
import { useNavigation } from "@react-navigation/native";

function Meetings(){
    const navigation = useNavigation();
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [phone, setPhone] = useState('');
    const [selectedRoleValue, setSelectedRoleValue] = React.useState('');
    const [selectedEmailValue, setSelectedEmailValue] = React.useState('');
    const [meeting, setMeeting] = useState('');
    const [formData, setFormData] = React.useState({});

    const handleRolePicker  = (role) =>  {
        setSelectedRoleValue(role),
        setFormData({...formData, role})
    }

    const handleEmailPicker  = (contactEmail) =>  {
        setSelectedEmailValue(contactEmail),
        setFormData({...formData, contactEmail})
    }

    const handleSubmit = event =>  {
        event.preventDefault()
        console.log({data: formData})
        sendEmail()
        // navigation.navigate("MainPage")
    }

    const sendEmail = () =>  {
        Axios.post('https://us-central1-hrfmobile-5638b.cloudfunctions.net/submitMeetingReq', formData)
    };

    return(
    <ScrollView showsVerticalScrollIndicator={false}>
        <Navbar />
        <Text style={styles.hOneMeeting}>Meetings</Text>
        <View style={styles.meetingWrapper}>
            <TextInput
                name="firstname"
                style={styles.meetingInput}
                mode='outlined'
                placeholder="First name"
                value={formData.firstname}
                onChangeText={firstname => setFormData({...formData, firstname})}
            />
            <TextInput
                name="lastname"
                style={styles.meetingInput}
                mode='outlined'
                placeholder="Last name"
                value={formData.lastname}
                onChangeText={lastname => setFormData({...formData, lastname})}
            />
            <TextInput
                name="phoneNumber"
                style={styles.meetingInput}
                mode='outlined'
                placeholder="Phone"
                value={formData.phoneNumber}
                onChangeText={phoneNumber => setFormData({...formData, phoneNumber})}
            />
            <Picker 
                style={styles.meetingPicker}
                name="role"
                value={formData.role}
                selectedValue={selectedRoleValue}
                onValueChange={role => handleRolePicker(role)}
            >   
                <Picker.Item label="What's your role?" value=''/>
                <Picker.Item label='Warehouse' value='Warehouse'/>
                <Picker.Item label='Bakery' value='Bakery'/>
                <Picker.Item label='Dry pack' value='Dry pack'/>
                <Picker.Item label='Dry mix' value='Dry mix'/>
                <Picker.Item label='Maintenance' value='Maintenance'/>
                <Picker.Item label='Mechanical' value='Mechanical'/>
            </Picker>
            <Picker 
                style={styles.meetingPicker}
                name="contactEmail"
                value={formData.contactEmail}
                selectedValue={selectedEmailValue}
                onValueChange={contactEmail => handleEmailPicker(contactEmail)}
            >
                <Picker.Item label='Who would you like to meet with?' value=''/>
                <Picker.Item label='Dry Mix/Pack Supervisor' value='manuel@hudsonriverfoods.com'/>
                <Picker.Item label='Bakery Supervisor' value='ambar@hudsonriverfoods.com'/>
                <Picker.Item label='Maintenance Manager' value='jerryhof@hudsonriverfoods.com'/>
                <Picker.Item label='Facilities Manager' value='victor@hudsonriverfoods.com'/>
                <Picker.Item label='Purchasing Manager' value='phil@hudsonriverfoods.com'/>
                <Picker.Item label='CEO' value='dan@hudsonriverfoods.com'/>
                <Picker.Item label='Developer' value='app.hrf@gmail.com'/>

            </Picker>
            <TextInput
                name="meetingDescription"
                style={styles.meetingInput}
                mode='outlined'
                placeholder="Whats the meeting about?"
                multiline={true}
                value={formData.meetingDescription}
                onChangeText={meetingDescription => setFormData({...formData, meetingDescription})}
            />
            <TouchableOpacity style={styles.btnMeeting} onPress={handleSubmit}>
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