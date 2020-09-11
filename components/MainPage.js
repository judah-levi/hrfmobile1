import React, { useEffect } from 'react';
import firestore from '@react-native-firebase/firestore'
import NavBar from './NavBar'
import { StyleSheet, ScrollView, View, Text, Image, RefreshControl} from "react-native";
  
const wait = (timeout) => {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  }

function MainPage() {
    const [newsList, setNewsList] = React.useState([])
    const [refreshing, setRefreshing] = React.useState(false);
    const [time, setTime] = React.useState(Date(Date.now()).toString());

    useEffect(() => {
        firestore().collection('news-updates').orderBy("timeStamp", "desc").limit(8).get()
        .then(snapshot => {
           setNewsList(snapshot.docs.map(doc => doc.data()))
           return newsList
        })
        .catch(err => {
            console.log('Error getting documents', err);
        });
    }, [newsList]);



    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTime({ time: Date(Date.now()).toString() })
        wait(800).then(() => setRefreshing(false));
      }, []);

    return(
            <ScrollView style={styles.mainWrapper} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}>
                <NavBar />
            <View style={styles.carousel}>
                    {newsList.map(item => 
                    <View style={styles.cardWrapper}>
                        <Text style={styles.cardTitle} key={item.title}>{item.title} </Text>
                        <Text style={styles.cardContent} key={item.content}>{item.content} </Text>
                        {/* <Text style={styles.cardContent}>{item.timeStamp.toString()}</Text> */}
                        <Image style={styles.image} source={require('../pics/0.png')}/>
                    </View>
                )}
            </View>
        </ScrollView>
    );
}

    const styles = StyleSheet.create({
        mainWrapper: {
            backgroundColor: '#00486D'
        },
        image: {
            marginTop: 'auto',
            marginLeft: 'auto',
            opacity: 0.1,
            width:300,
            height: 300
        },
        carousel: {
            flex: 1,
            flexDirection: 'column'
        },
        cardWrapper: {
            backgroundColor: 'white',
            margin: 25,
            marginTop: 50,
            marginBottom: 10,
            padding: 11,
            borderRadius: 8,
            borderStyle: 'solid',
            borderColor: 'grey',
            borderWidth: 4,
            height: 500,
        },
        cardTitle: {
            color: 'black',
            fontWeight: 'bold',
            fontSize: 33,
            paddingBottom: 5,
        },
        cardContent: {
            color: 'black',
            fontSize: 22,
            paddingBottom: 7,
            zIndex: 1,
            lineHeight: 28,
        },
        
    })

export default MainPage