import React, {useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Title} from 'react-native';
import AdminNavBar from './adminNavBar';
import {useAndroidBackHandler} from 'react-navigation-backhandler';
import firestore from '@react-native-firebase/firestore';

export default function AdminPage() {
  const [newsList, setNewsList] = React.useState('');

  useAndroidBackHandler(() => {
    return true;
  });

  useEffect(() => {
    firestore()
      .collection('news-updates')
      .limit(8)
      .get()
      .then((data) => {
        setNewsList(
          data.docs.map((doc) => {
            return {...doc.data(), id: doc.id};
          }),
        );
        return newsList;
      })
      // setNewsList(data.docs.map(doc => {return {...doc.data(), id: doc.id} }))
      .catch((err) => {
        console.log('Error getting documents', err);
      });
  }, [newsList]);

  return (
    <View>
      <AdminNavBar />
      <View style={styles.fontwrapper}>
        <Text style={styles.welcome}>
          Welcome to the admin console. This is an early-stage test version of
          your app. At this time you can only access the news updating form.
          Whenever you have an update for your organization just click the
          button above and fill out the form!
        </Text>

        <View style={styles.eeuu}>
          {newsList.map((i) => {
            return (
              <View>
                <Text key={i.title}>{i.title}</Text>
                <Text key={i.content}>{i.content}</Text>
                <TouchableOpacity
                  onPress={() =>
                    firestore().collection('news-updates').doc(i.id).delete()
                  }>
                  <Text key={i.timestamp}>DELETE </Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  welcome: {
    fontWeight: 'bold',
    lineHeight: 25,
  },
  fontwrapper: {
    alignItems: 'center',
    padding: 30,
  },
  eeuu: {
    color: 'black',
    // backgroundColor: 'red'
  },
});
