import React, { useEffect } from 'react';
import firestore from '@react-native-firebase/firestore'
import Carousel from 'react-native-snap-carousel'
import NavBar from './NavBar'
import { StyleSheet, View, Text, Image} from "react-native";

function MainPage() {
    const [newsList, setNewsList] = React.useState([])
    const [activeIndex, setActivateIndex] = React.useState(0)

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

    const renderItem = ({item,index}) => {
        return (
          <View style={styles.carouselGeneral}>
            <Text style={styles.carouselTitle} key={index}>{item.title}</Text>
            <Text style={styles.carouselContent} key={item.content}>{item.content}</Text>
            <Image style={styles.carouselImage} source={require('../pics/0.png')}/>
          </View>

        )
    }

    return(
        
        <View style={styles.mainWrapper}>
        <NavBar />
        <Text style={styles.lastNews}>Last news</Text>
        <View style={styles.carouselWrapper}>
            <Carousel
              layout={"default"}
              data={newsList}
              sliderWidth={300}
              itemWidth={300}
              renderItem={renderItem}
              onSnapToItem = { index => setActivateIndex({activeIndex:index}) } />
        </View>
      </View>
              
    );
}

    const styles = StyleSheet.create({
        mainWrapper: {
            flex: 1,
            backgroundColor: '#00486D',
        },
        lastNews: {
            color: 'white',
            textAlign: 'center',
            fontSize: 50,
            marginTop: 15
        },
        carouselWrapper: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            paddingTop: 25,
        },
        carouselGeneral: {
            backgroundColor: 'white',
            borderRadius: 6,
            height: 550,
            width: 300,
            padding: 30,
            marginLeft: 30,
            marginRight: 20,
            position: 'relative'
        },
        carouselTitle: {
            fontWeight: 'bold',
            paddingBottom: 20,
            fontSize: 40,
        },
        carouselContent: {
            fontSize: 25,
            zIndex: 1,
            lineHeight: 35
        },
        carouselImage: {
            position: 'absolute',
            start: 50,
            top: 180,
            opacity: 0.2
        }
    })

export default MainPage