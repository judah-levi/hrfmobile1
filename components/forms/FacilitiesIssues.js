import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import Navbar from '../NavBar'

function FacilitiesIssues(){
    const [facilities, setFacilities] = React.useState('');

    return(
        <View>
            <Navbar />
            <Text style={styles.hOneFacilities}>Facilities issues</Text>
            <View style={styles.facilitiesWrapper}>
                <TextInput
                    style={styles.facilitiesInput}
                    mode='outlined'
                    multiline={true}
                    placeholder="Facilities issues"
                    value={facilities}
                    onChangeText={facilities => setFacilities(facilities)}
                />
                <TouchableOpacity style={styles.btnFacilities}>
                    <Text style={styles.btnTextFacilities}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    facilitiesWrapper:{
        marginTop: '10%',
        marginLeft: 15,
        marginRight: 15
    },
    hOneFacilities: {
        fontSize: 30,
        textAlign: 'center',
        marginTop: '10%',
        // fontWeight: 'bold'
    },
    facilitiesInput: {
        backgroundColor: 'white'
    },
    btnFacilities: {
        marginTop: '18%',
        backgroundColor: 'red',
        borderRadius: 2,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnTextFacilities: {
        backgroundColor: "#00486D",
        padding: 15,
        borderRadius: 4,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },
})

export default FacilitiesIssues