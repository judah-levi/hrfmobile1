import React, {setState} from 'react'
import {StyleSheet, TouchableOpacity, Text, View, Image} from "react-native";
import AdminNavBar from './adminNavBar';
import { TextInput } from 'react-native-paper';
import ImagePicker from 'react-native-image-picker'
import firestore from '@react-native-firebase/firestore'
import storage from '@react-native-firebase/storage'
import RNFetchBlob from 'rn-fetch-blob'
import {useNavigation} from '@react-navigation/native'
class FormCarousel extends React.Component {
    constructor(props)  {
        super(props)
        this.state = {
            title: '',
            content: '',
            image: null,
            timeStamp: new Date()
        }
    }

    getPathForFirebaseStorage = async (uri) => {
        const stat = await RNFetchBlob.fs.stat(uri)
        // console.log(stat.path)
        return stat.path
    }
      
    uploadToStorage = (uploadFile) =>  {
        const reference = storage().ref('/images'+ uploadFile)
        const task = reference.putFile(uploadFile)
        task.on('state_changed', taskSnapshot => {
            console.log(`${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`);
        });
        task.then(() => {
            console.log('Image uploaded to the bucket!');
        });
    }


    uploadPost = (post) => {
        const uploadData = {
            title: post.title,
            content: post.content,
            image: post.image,
            timeStamp: post.timeStamp
        }
        return firestore().collection('news-updates').doc().set(uploadData)
    }

    handleImagePicker = () => {
        const options = {
            storageOptions:  {
                path: 'images',
            }
        }
        const pickMe = ImagePicker.launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker')
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error)
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton)
            } else {
                const source = {uri: response.uri};
                this.setState({image: source})
                // return source;
                console.log(this.state.image)
            }
        })
        // const androidPath = await this.getPathForFirebaseStorage(source.uri);
        // this.setState({image: androidPath});
        // console.log(this.state.image)
        // this.uploadToStorage('/storage/emulated/0/DCIM/Camera/IMG_20200726_091113.jpg');
    }


    handleShootPhoto = () => { 
        const options = {            
            // path: 'images'
        };
        ImagePicker.launchCamera(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled camera')
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error)
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton)
            } else {
                const source = { uri: response.uri };
                const androidPath = this.getPathForFirebaseStorage(source.uri);
                this.setState({image: androidPath});
                console.log(this.state.image)

            }
        })
    }

    handleSubmit = async () =>  {
        const post = {
          image: this.state.image,
          title: this.state.title,
          content: this.state.content,
          timeStamp: this.state.timeStamp
        }
        this.uploadPost(post)
        
        // setImage({image: null})
        // setTitle({title: ''})
        // setContent({content: ''})
    }
    

    render()  {
    const {navigation} = this.props
    
    return(
        <View>
            <AdminNavBar />
            <Text style={styles.hOneCarousel}>Push company-wide news updates:</Text>
            <View style={styles.carouselWrapper}>
                <TextInput
                    theme={{ colors: { primary: "#00486D" }}}
                    selectionColor={'white'}
                    autoCapitalize="words"
                    underlineColorAndroid={'#00486D'}
                    maxLength={15}
                    style={styles.carouselInput}
                    placeholder="Title"
                    onChangeText={title => this.setState({title: title})}
                />
                <TextInput
                    theme={{ colors: { primary: "#00486D" }}}
                    selectionColor={'white'}
                    autoCapitalize="sentances"
                    underlineColorAndroid={'#00486D'}
                    maxLength={140}
                    multiline={true}
                    numberOfLines={5}
                    style={styles.carouselInput}
                    placeholder="Content"
                    onChangeText={content => this.setState({content: content})}
                />
                {/* <View>
                    <TouchableOpacity 
                        onPress={this.handleImagePicker}
                        >
                        <Text style={styles.left}>Upload a picture</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={this.handleShootPhoto}
                    >
                        <Text style={styles.right}>Take a picture</Text>
                    </TouchableOpacity>
                </View> */}
                <TouchableOpacity 
                    style={styles.btnCarousel} 
                    onPress={() =>  {
                        this.handleSubmit();
                        navigation.navigate('AdminPage')
                    }}
                >
                    <Text style={styles.btnTextCarousel}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    )}
}

export default function(props) {
    const navigation = useNavigation();
  
    return <FormCarousel {...props} navigation={navigation} />;
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

