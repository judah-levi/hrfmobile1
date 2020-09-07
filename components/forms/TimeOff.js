import * as React from 'react';
import {StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {Picker} from '@react-native-community/picker';
import CalendarTimeOff from './forms subcomponents/CalendarTimeOff'
import { TextInput } from 'react-native-paper';
import Navbar from '../NavBar'


function TimeOff(){
    const [firstname, setFirstname] = React.useState('');
    const [lastname, setLastname] = React.useState('');

    return(
        <View>
            <Navbar />
            <Text style={styles.hOneTimeOff}>Time off</Text>
            <View style={styles.timeOffWrapper}>
                <TextInput
                    style={styles.timeOffInput}
                    mode='outlined'
                    placeholder="First name"
                    value={firstname}
                    onChangeText={firstname => setFirstname(firstname)}
                />
                <TextInput
                    style={styles.timeOffInput}
                    mode='outlined'
                    placeholder="Last name"
                    value={lastname}
                    onChangeText={lastname => setLastname(lastname)}
                />
                <Picker style={styles.timeOffPicker}>
                    <Picker.Item label='Ware house' value='ware house'/>
                    <Picker.Item label='Bakery' value='bakery'/>
                    <Picker.Item label='Dry pack' value='dry pack'/>
                    <Picker.Item label='Dry mix' value='dry mix'/>
                    <Picker.Item label='Maintenance' value='maintenance'/>
                    <Picker.Item label='Mechanical' value='mechanical'/>
                </Picker>
                <CalendarTimeOff />
                <TouchableOpacity style={styles.btnTimeOff}>
                    <Text style={styles.btnTextTimeOff}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
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
        // fontWeight: 'bold'
    },
    timeOffPicker: {
        backgroundColor: 'white',
        marginBottom: '3%'
    },
    timeOffInput: {
        marginBottom: '3%',
        backgroundColor: 'white'
    },
    btnTimeOff: {
        marginTop: '13%',
        backgroundColor: 'red',
        borderRadius: 2,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnTextTimeOff: {
        backgroundColor: "#00486D",
        padding: 15,
        borderRadius: 4,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },
})

export default TimeOff