import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import Navbar from '../NavBar'

function EquipmentFailure(){
    const [line, setLine] = React.useState('');
    const [description, setDescription] = React.useState('');

    return(
        <View>
            <Navbar />
            <Text style={styles.hOneEquipment}>Equipment failure</Text>
            <View style={styles.equipmentWrapper}>
                <TextInput
                    style={styles.equipmentInput}
                    placeholder="Line number"
                    mode='outlined'
                    value={line}
                    onChangeText={line => setLine(line)}
                />
                <TextInput
                    style={styles.equipmentInput}
                    placeholder="Equipment description"
                    mode='outlined'
                    multiline={true}
                    value={description}
                    onChangeText={description => setDescription(description)}
                />
                <TouchableOpacity style={styles.btnEquipment}>
                    <Text style={styles.btnTextEquipment}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    equipmentWrapper:{
        marginTop: '10%',
        marginLeft: 15,
        marginRight: 15
    },
    hOneEquipment: {
        fontSize: 30,
        textAlign: 'center',
        marginTop: '10%',
        // fontWeight: 'bold'
    },
    equipmentInput: {
        backgroundColor: 'white',
        marginBottom: '3%'
    },
    btnEquipment: {
        marginTop: '18%',
        backgroundColor: 'red',
        borderRadius: 2,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnTextEquipment: {
        backgroundColor: "#00486D",
        padding: 15,
        borderRadius: 4,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },
})

export default EquipmentFailure