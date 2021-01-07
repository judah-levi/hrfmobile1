import React, {useEffect, useState, useContext} from 'react';
import firestore from '@react-native-firebase/firestore';
import Carousel from 'react-native-snap-carousel';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  PixelRatio,
} from 'react-native';
import {useAndroidBackHandler} from 'react-navigation-backhandler';
import moment from 'moment';
import Nav from '../Nav';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {stateContext} from '../context/context';
import * as RNLocalize from 'react-native-localize';
import {ActivityIndicator} from 'react-native-paper';

function MainPage() {
  const [loading, setLoading] = useState(false);
  const [newsList, setNewsList] = useState([]);
  const [activeIndex, setActivateIndex] = useState();
  const {translate, handleLocalizationChange} = useContext(stateContext);

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
        <View>
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
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.topWrapper}>
          <View style={styles.titleWrapper}>
            <Image
              style={styles.imageCisne}
              source={require('../../pics/f-2.png')}
            />
            <View style={styles.textTitleWrapper}>
              <MaterialCommunityIcons
                name="calendar-text-outline"
                style={styles.mainTitleIcon}
              />
              <Text style={styles.mainTitle}>{translate('Messages')}</Text>
            </View>
          </View>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.bottomWrapper}>
          <View style={styles.carouselWrapper}>
            {loading ? (
              <Carousel
                layout={'default'}
                data={newsList}
                sliderWidth={260}
                itemWidth={260}
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
        </ScrollView>
      </ScrollView>
    </View>
  );
}

let font_size_title = 28;
let size_icon = 34;
let imageCisne_width = 215;
let imageCisne_height = 205;
let imageCisne_right = '-15%';
let font_size_content = 19;
let font_size_date = 19;

if (PixelRatio.get() <= 2) {
  font_size_title = 26;
  size_icon = 32;
  imageCisne_width = 185;
  imageCisne_height = 175;
  imageCisne_right = '-5%';
}
if (PixelRatio.get() <= 1.5) {
  font_size_title = 23;
  size_icon = 28;
  imageCisne_width = 155;
  imageCisne_height = 145;
  imageCisne_right = '-4%';
  font_size_content = 16;
  font_size_date = 17;
}

const styles = StyleSheet.create({
  mainWrapper: {
    flexDirection: 'row',
    height: '100%',
  },
  topWrapper: {
    height: '30%',
  },
  titleWrapper: {
    overflow: 'hidden',
    flex: 2,
    borderBottomRightRadius: 165,
    backgroundColor: '#73a4d8',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    elevation: 5,
  },
  imageCisne: {
    position: 'absolute',
    width: imageCisne_width,
    height: imageCisne_height,
    position: 'absolute',
    top: '4%',
    right: imageCisne_right,
    zIndex: 0,
    opacity: 0.6,
  },
  textTitleWrapper: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: '5%',
  },
  mainTitleIcon: {
    color: 'white',
    fontSize: size_icon,
    marginLeft: -6,
  },
  mainTitle: {
    color: 'white',
    fontSize: font_size_title,
  },
  bottomWrapper: {
    marginTop: '5%',
    marginBottom: '5%',
    height: 100,
  },
  carouselWrapper: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 10,
  },
  carouselGeneral: {
    backgroundColor: 'white',
    borderRadius: 10,
    height: 500,
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
    fontSize: font_size_content,
    zIndex: 1,
    lineHeight: 29,
    color: 'black',
    fontFamily: 'Roboto-Light',
  },
  carouselDate: {
    fontSize: font_size_date,
    color: 'rgb(190, 190, 190)',
    fontFamily: 'Roboto-Light',
    fontStyle: 'italic',
  },
  spinner: {
    flex: 1,
    marginTop: '10%',
  },
});

export default MainPage;
