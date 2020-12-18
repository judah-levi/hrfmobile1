import React, {useEffect, useState, useContext} from 'react';
import firestore from '@react-native-firebase/firestore';
import Carousel from 'react-native-snap-carousel';
import {StyleSheet, View, Text, ImageBackground} from 'react-native';
import {useAndroidBackHandler} from 'react-navigation-backhandler';
import moment from 'moment';
import Nav from '../Nav';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {stateContext} from '../context/context';
import * as RNLocalize from 'react-native-localize';
import {ActivityIndicator, Colors} from 'react-native-paper';

function MainPage() {
  const [loading, setLoading] = useState(false);
  const [newsList, setNewsList] = useState([]);
  const [activeIndex, setActivateIndex] = useState();
  const {translate, setI18nConfig, handleLocalizationChange} = useContext(
    stateContext,
  );

  useAndroidBackHandler(() => {
    return true;
  });

  useEffect(() => {
    RNLocalize.addEventListener('change', handleLocalizationChange);
    return RNLocalize.removeEventListener('change', handleLocalizationChange);
  }, []);

  useEffect(() => {
    let mounted = true;
    firestore()
      .collection('news-updates')
      .orderBy('timeStamp', 'desc')
      .limit(8)
      .get()
      .then((snapshot) => {
        if (mounted) {
          setNewsList(snapshot.docs.map((doc) => doc.data()));
          return newsList, setLoading(true);
        }
      })
      .catch((err) => {
        console.log('Error getting documents', err);
      });

    return () => (mounted = false);
  }, [newsList]);

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.carouselGeneral}>
        <View style={styles.carouselSubWrapper}>
          <Text style={styles.carouselTitle} key={index}>
            {item.title}
          </Text>
          <Text style={styles.carouselContent} key={item.content}>
            {item.content}
          </Text>
        </View>
        <Text style={styles.carouselDate}>
          {moment(item.timeStamp._seconds * 1000).format(
            'MMMM Do YYYY, h:mm:ss a',
          )}
        </Text>
      </View>
    );
  };
  return (
    <View style={styles.mainWrapper}>
      <Nav />
      <View style={styles.rightWrapper}>
        <ImageBackground
          source={require('../../pics/fondos-2.png')}
          style={styles.rightBackground}>
          <View style={styles.titleWrapper}>
            <MaterialCommunityIcons
              name="calendar-text-outline"
              style={styles.mainTitleIcon}
            />
            <Text style={styles.mainTitle}>{translate('Messages')}</Text>
          </View>
        </ImageBackground>
        <View style={styles.carouselWrapper}>
          {loading ? (
            <Carousel
              layout={'default'}
              data={newsList}
              sliderWidth={300}
              itemWidth={300}
              renderItem={renderItem}
              onSnapToItem={(index) => setActivateIndex({activeIndex: index})}
            />
          ) : (
            <View style={styles.spinner}>
              <ActivityIndicator
                animating={true}
                size={50}
                color={'#00486e'}
                style={styles.spinner}
              />
            </View>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainWrapper: {
    flexDirection: 'row',
    height: '100%',
  },
  rightWrapper: {
    width: '85%',
    backgroundColor: 'rgb(218, 218, 218)',
    flex: 1,
  },
  rightBackground: {
    width: '100%',
    height: '70%',
    resizeMode: 'cover',
  },
  titleWrapper: {
    marginTop: 65,
    marginLeft: 25,
  },
  mainTitleIcon: {
    color: 'white',
    fontSize: 38,
    marginLeft: -6,
  },
  mainTitle: {
    color: 'white',
    fontSize: 27,
  },
  carouselWrapper: {
    flex: 1,
    flexDirection: 'row',
    marginTop: -380,
    marginRight: 0,
    width: '100%',
    paddingLeft: 10,
    paddingRight: 5,
  },
  carouselGeneral: {
    backgroundColor: 'white',
    borderRadius: 10,
    height: 550,
    maxWidth: 300,
    padding: 18,
    justifyContent: 'space-between',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    elevation: 3,
  },

  carouselTitle: {
    fontWeight: 'bold',
    paddingBottom: 25,
    fontSize: 30,
    color: 'black',
  },
  carouselContent: {
    fontSize: 19,
    zIndex: 1,
    lineHeight: 29,
    color: 'black',
  },
  carouselDate: {
    fontSize: 19,
    color: 'grey',
  },
  spinner: {
    flexDirection: 'row',
    marginBottom: '15%',
    marginLeft: '30%',
  },
});

export default MainPage;
