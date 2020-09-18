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
        <Text style={styles.latestNews}>Latest News:</Text>
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
        latestNews: {
            color: 'white',
            textAlign: 'center',
            fontSize: 30,
            marginTop: 10
        },
        carouselWrapper: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            paddingTop: 10,
            paddingLeft: 10,
            paddingRight: 10
        },
        carouselGeneral: {
            backgroundColor: 'white',
            borderRadius: 6,
            height: '90%',
            width: 300,
            padding: 30,
            position: 'relative'
        },
        carouselTitle: {
            fontWeight: 'bold',
            paddingBottom: 25,
            fontSize: 30,
        },
        carouselContent: {
            fontSize: 22,
            zIndex: 1,
            lineHeight: 30
        },
        carouselImage: {
            position: 'absolute',
            start: 50,
            top: 180,
            opacity: 0.2
        }
    })

export default MainPage