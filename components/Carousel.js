import Carousel from 'react-native-snap-carousel';
import React from 'react';
import firestore from '@react-native-firebase/firestore'
import { TouchableOpacity, Text, View } from 'react-native';
import { Button } from 'react-native-paper';


export default function MyCarousel() {
    
    const db = firestore();
    const news = db.collection('news-updates');

    const getNews = ()  => {
        news.get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc)  {
                console.log(doc.data().title);
            });
        })
    };

    return (
        // <Carousel
        //   layout={'stack'} 
        //   layoutCardOffset={`18`} 
        //   ref={(c) => {_carousel = c; }}
        // //   data={this.state.entries}
        //   renderItem={_renderItem}
        //   sliderWidth={sliderWidth}
        //   itemWidth={itemWidth}
        // 
        <View>
        <TouchableOpacity
            onPress={getNews}
        >
            <Text>Console Log</Text>
        </TouchableOpacity>
        </View>
    );
}
