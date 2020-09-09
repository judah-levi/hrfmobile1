import React from 'react';
import {StyleSheet, ScrollView, Text, View, TouchableOpacity, Form } from 'react-native';
import {Picker} from '@react-native-community/picker';
import CalendarTimeOff from './forms subcomponents/CalendarTimeOff'
import { TextInput } from 'react-native-paper';
import Navbar from '../NavBar'
import {Axios} from '../../firebase/firebaseConfig';
import Context from '../Context'

function TimeOff(){
    const [firstname, setFirstname] = React.useState('');
    const [lastname, setLastname] = React.useState('');
    const [selectedValue, setSelectedValue] = React.useState('');
    const [formData, setFormData] = React.useState({});
    const [startDate, setStartDate] = React.useState("");
    const [endDate, setEndDate] = React.useState("");


    const handlePicker  = (role) =>  {
        setSelectedValue(role),
        setFormData({...formData, role})
    }

    const handleDateChange = () =>  {
        setFormData({...formData, startDate, endDate})
    }

    const handleSubmit = event =>  {
        event.preventDefault()
        console.log({data: formData})
        sendEmail()
        // setFormData({
        //     firstname: '',
        //     lastname: '',
        //     role: "What's your role?",
        //     requestedDates: ''
        // })
    }

    const sendEmail = () =>  {
        Axios.post('https://us-central1-hrfmobile-5638b.cloudfunctions.net/submitTimeOff', formData)
    };

    return(
        <Context.Provider>
        <ScrollView showsVerticalScrollIndicator={false}>
            <Navbar />
            <Text style={styles.hOneTimeOff}>Schedule time off</Text>
            <View style={styles.timeOffWrapper}>
                <TextInput
                    name="firstname"
                    style={styles.timeOffInput}
                    mode='outlined'
                    placeholder="First name"
                    value={formData.firstname}
                    onChangeText={firstname => setFormData({...formData, firstname})}
                />
                <TextInput
                    name="lastname"
                    style={styles.timeOffInput}
                    mode='outlined'
                    placeholder="Last name"
                    value={formData.lastname}
                    onChangeText={lastname => setFormData({...formData, lastname})}
                />
                <Picker 
                name="role"
                style={styles.timeOffPicker} 
                value={formData.role}
                selectedValue={selectedValue}
                onValueChange={role => handlePicker(role)}
                >
                    <Picker.Item label="What's your role?" value=''/>
                    <Picker.Item label='Warehouse' value='Warehouse'/>
                    <Picker.Item label='Bakery' value='Bakery'/>
                    <Picker.Item label='Dry pack' value='Dry pack'/>
                    <Picker.Item label='Dry mix' value='Dry mix'/>
                    <Picker.Item label='Maintenance' value='Maintenance'/>
                    <Picker.Item label='Mechanical' value='Mechanical'/>
                </Picker>
                <CalendarTimeOff onDateChange={handleDateChange}/>
                <TouchableOpacity style={styles.btnTimeOff} onPress={handleSubmit}>
                    <Text style={styles.btnTextTimeOff}>Submit</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
        </Context.Provider>
        )
}

const styles = StyleSheet.create({
    timeOffWrapper:{
        marginTop: '4%',
        marginLeft: 15,
        marginRight: 15
    },
    hOneTimeOff: {
        fontSize: 30,
        textAlign: 'center',
        marginTop: '6%',
    },
    timeOffPicker: {
        backgroundColor: 'white',
        marginBottom: '3%',
        marginTop: '1%'
    },
    timeOffInput: {
        marginBottom: '1%',
        backgroundColor: 'white'
    },
    btnTimeOff: {
        marginTop: 10,
        borderRadius: 5,
    },
    btnTextTimeOff: {
        backgroundColor: "#00486D",
        textAlign: 'center',
        padding: 15,
        borderRadius: 5,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },
})

export default TimeOff