import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

function Nav() {
  const navigation = useNavigation();

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
        <TouchableOpacity
          style={styles.iconBtn}
          onPress={() => navigation.navigate('Login')}>
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
    marginTop: 35,
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
    width: 40,
    height: 40,
  },
});

export default Nav;
