import React, {useState} from 'react'
import {StyleSheet, TouchableOpacity, Text, Image, View} from "react-native";
import AdminNavBar from './adminNavBar';
import { TextInput } from 'react-native-paper';
import ImagePicker from 'react-native-image-picker'

function FormCarousel(){
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleLibraryPhoto = () => {
        const options = {};
        ImagePicker.launchImageLibrary(options, response => {
            console.log('response', response)
        })
    }
    const handleShootPhoto = () => {
        const options = {};
        ImagePicker.launchCamera(options, response => {
        })
    }

    return(
        <View>
            <AdminNavBar />
            <Text style={styles.hOneCarousel}>Push company-wide news updates:</Text>
            <View style={styles.carouselWrapper}>
            <TextInput
                style={styles.carouselInput}
                mode='outlined'
                placeholder="Title"
                value={title}
                onChangeText={title => setTitle(title)}
            />
            <TextInput
                style={styles.carouselInput}
                mode='outlined'
                placeholder="Content"
                value={content}
                onChangeText={content => setContent(content)}
            />
            <View style={styles.photo}>
                <TouchableOpacity onPress={handleLibraryPhoto}>
                    <Text style={styles.left}>Upload a picture</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleShootPhoto}>
                    <Text style={styles.right}>Take a picture</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.btnCarousel}>
                <Text style={styles.btnTextCarousel}>Submit</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    carouselWrapper:{
        marginTop: '4%',
        marginLeft: 15,
        marginRight: 15
    },
    hOneCarousel: {
        fontSize: 22,
        textAlign: 'center',
        marginTop: '6%',
    },
    carouselInput: {
        marginBottom: '1%',
        backgroundColor: 'white'
    },
    photo: {
        flex: 1,
        justifyContent: 'space-around',
        marginBottom: 40,
        marginTop: 15,
    },
    left: {
        color: 'black',
        padding: 10,
        fontWeight: 'bold',
        fontSize: 17
    },
    right: {
        textAlign: 'right',
        color: 'black',
        padding: 10,
        fontWeight: 'bold',
        fontSize: 17
    },
    btnCarousel: {
        marginTop: 20,
        borderRadius: 5,
    },
    btnTextCarousel: {
        backgroundColor: "#00486D",
        textAlign: 'center',
        padding: 15,
        borderRadius: 5,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },
})

export default FormCarousel