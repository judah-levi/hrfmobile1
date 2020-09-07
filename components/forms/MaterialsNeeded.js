import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import Navbar from '../NavBar'

function MaterialsNeeded(){
    const [stock, setStock] = React.useState('');
    const [descriptionStock, setDescriptionStock] = React.useState('');
    const [quantityShort, setQuantityShort] = React.useState('');

    return(
        <View>
            <Navbar />
            <Text style={styles.hOneMaterial}>Materials needed</Text>
            <View style={styles.materialWrapper}>
                <TextInput
                    style={styles.materialInput}
                    mode='outlined'
                    placeholder="Stock code"
                    value={stock}
                    onChangeText={stock => setStock(stock)}
                />
                <TextInput
                    style={styles.materialInput}
                    mode='outlined'
                    multiline={true}
                    placeholder="Description"
                    value={descriptionStock}
                    onChangeText={descriptionStock => setDescriptionStock(descriptionStock)}
                />
                <TextInput
                    style={styles.materialInput}
                    mode='outlined'
                    multiline={true}
                    placeholder="Quantity short"
                    value={quantityShort}
                    onChangeText={quantityShort => setQuantityShort(quantityShort)}
                />
                <TouchableOpacity style={styles.btnStock}>
                    <Text style={styles.btnTextStock}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    materialWrapper:{
        marginTop: '4%',
        marginLeft: 15,
        marginRight: 15
    },
    hOneMaterial: {
        fontSize: 30,
        textAlign: 'center',
        marginTop: '6%',
    },
    materialInput: {
        backgroundColor: 'white',
        marginBottom: '1%'
    },
    btnStock: {
        marginTop: 10,
        borderRadius: 5,
    },
    btnTextStock: {
        backgroundColor: "#00486D",
        textAlign: 'center',
        padding: 15,
        borderRadius: 5,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },
})

export default MaterialsNeeded