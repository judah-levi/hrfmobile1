import React from 'react';
import {Appbar} from 'react-native-paper';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {StyleSheet, TouchableOpacity, Image} from 'react-native';

export default function NavBar() {
  const navigation = useNavigation();

  return (
    <Appbar.Header style={styles.headerWrapper}>
      <Appbar style={styles.column2}>
        <TouchableOpacity onPress={() => navigation.navigate('MainPage')}>
          <MaterialCommunityIcon
            name="calendar-text-outline"
            style={styles.icons}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('PersonalPage')}>
          <MaterialCommunityIcon name="account-outline" style={styles.icons} />
        </TouchableOpacity>
        <Image
          style={styles.image}
          source={require('../../pics/HeaderLogo_180x.webp')}
        />
        <TouchableOpacity onPress={() => navigation.navigate('BusinessPage')}>
          <MaterialCommunityIcon name="cog-outline" style={styles.icons} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => auth().signOut()}>
          <MaterialCommunityIcon name="logout" style={styles.icons} />
        </TouchableOpacity>
      </Appbar>
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  headerWrapper: {
    height: 'auto',
    backgroundColor: '#fff',
    width: '100%',
  },
  column2: {
    height: 'auto',
    width: '100%',
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    paddingTop: 20,
    paddingBottom: 20,
    zIndex: 0,
  },
  icons: {
    backgroundColor: '#fff',
    color: '#E6BE8A',
    padding: 10,
    fontSize: 34,
  },
  image: {
    width: 50,
    height: 50,
    tintColor: '#E6BE8A',
  },
});
