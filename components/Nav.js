import React, {useContext} from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {stateContext} from './context/context';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Nav() {
  const navigation = useNavigation();
  const {setToken, setPhoneNumber} = useContext(stateContext);

  const handleLogOut = () => {
    setToken('');
    setPhoneNumber('');
    AsyncStorage.removeItem('token');
    AsyncStorage.removeItem('role');
    AsyncStorage.removeItem('userInfo');
  };

  return (
    <View style={styles.mainWrapper}>
      <View style={styles.iconsWrapper}>
        <TouchableOpacity
          style={styles.iconBtn}
          onPress={() => navigation.navigate('MainPage')}>
          <MaterialCommunityIcon
            name="calendar-text-outline"
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconBtn}
          onPress={() => navigation.navigate('PersonalPage')}>
          <MaterialCommunityIcon name="account-outline" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconBtn}
          onPress={() => navigation.navigate('BusinessPage')}>
          <MaterialCommunityIcon name="cog-outline" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconBtn} onPress={handleLogOut}>
          <MaterialCommunityIcon name="logout" style={styles.icon} />
        </TouchableOpacity>
      </View>

      <AntDesign
        name="left"
        style={styles.arrow}
        onPress={() => navigation.navigate('MainMenu')}
      />
      <Image
        style={styles.image}
        source={require('../pics/HeaderLogo_180x.webp')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainWrapper: {
    width: '15%',
    backgroundColor: '#00486e',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconsWrapper: {
    marginTop: 30,
  },
  iconBtn: {
    padding: 10,
  },
  icon: {
    color: 'rgb(200,200,200)',
    fontSize: 30,
  },
  arrow: {
    color: 'rgb(200,200,200)',
    fontSize: 30,
  },
  image: {
    marginBottom: 35,
    width: 35,
    height: 35,
  },
});

export default Nav;
