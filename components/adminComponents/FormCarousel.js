import React, {setState} from 'react'
import {StyleSheet, TouchableOpacity, Text, View, Image} from "react-native";
import AdminNavBar from './adminNavBar';
import { TextInput } from 'react-native-paper';
import ImagePicker from 'react-native-image-picker'
import firestore from '@react-native-firebase/firestore'


class FormCarousel extends React.Component {
    constructor(props)  {
        super(props)
        this.state = {
            title: '',
            content: '',
            image: null
        }
    }

    uploadPost = (post) => {
        const uploadData = {
            title: post.title,
            content: post.content,
            image: post.image
        }
        return firestore().collection('news-updates').doc().set(uploadData)
    }

    handleLibraryPhoto = () => {
        const options = {
            storageOptions:  {
                path: 'images',
            }
          }
          ImagePicker.launchImageLibrary(options, (response) => {
            if (response.didCancel) {
              console.log('User cancelled image picker')
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error)
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton)
            } else {
              const source = {uri: response.uri};
              this.setState({image: source});
              console.log(this.state.image)
            }
          })
    }

    handleShootPhoto = () => { 
        const options = {            
            path: 'images'
        };
        ImagePicker.launchCamera(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker')
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error)
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton)
            } else {
                const source = { uri: response.uri };
                this.setState({image: source})
                console.log(this.state.image)
            }
        })
    }

    handleSubmit = async () =>  {
        const post = {
          image: this.state.image,
          title: this.state.title,
          content: this.state.content
        }
        this.uploadPost(post)
        
        // setImage({image: null})
        // setTitle({title: ''})
        // setContent({content: ''})
    }
    

    render()  {
    return(
        <View>
            <AdminNavBar />
            <Text style={styles.hOneCarousel}>Push company-wide news updates:</Text>
            <View style={styles.carouselWrapper}>
                <TextInput
                    style={styles.carouselInput}
                    mode='outlined'
                    placeholder="Title"
                    onChangeText={title => this.setState({title: title})}
                />
                <TextInput
                    style={styles.carouselInput}
                    mode='outlined'
                    placeholder="Content"
                    onChangeText={content => this.setState({content: content})}
                />
                <View>
                    <TouchableOpacity 
                        onPress={this.handleLibraryPhoto}
                        >
                        <Text style={styles.left}>Upload a picture</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={this.handleShootPhoto}
                    >
                        <Text style={styles.right}>Take a picture</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.btnCarousel} onPress={this.handleSubmit}>
                    <Text style={styles.btnTextCarousel}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
    }
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