import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import NavBar from './NavBar';

export default function PersonalPage() {
  const navigation = useNavigation();
  //   console.log(setI18nConfig());

<<<<<<< HEAD
  return (
    <View style={styles.pageWrapper}>
      <NavBar />
      <View style={styles.wrapper}>
        <View>
          <TouchableOpacity
            style={styles.buttonavatar}
            onPress={() => navigation.navigate('TimeOffForm')}>
            <MaterialCommunityIcons
              style={styles.avatar}
              size={85}
              name="calendar-account"
            />
          </TouchableOpacity>
          <Text style={styles.avatartext}>TIME OFF</Text>
        </View>
        <View>
          <TouchableOpacity
            style={styles.buttonavatar}
            onPress={() => navigation.navigate('MeetingsForm')}>
            <AntDesign style={styles.avatar} size={85} name="team" />
          </TouchableOpacity>
          <Text style={styles.avatartext}>MEETINGS</Text>
        </View>
        <View style={styles.belows}>
          <TouchableOpacity
            style={styles.buttonavatar}
            onPress={() => navigation.navigate('SickDayForm')}>
            <AntDesign style={styles.avatar} size={85} name="deleteuser" />
          </TouchableOpacity>
          <Text style={styles.avatartext}>SICK DAY</Text>
        </View>
        <View style={styles.belows}>
          <TouchableOpacity
            style={styles.buttonavatar}
            onPress={() => navigation.navigate('CovidPage')}>
            <MaterialCommunityIcons
              style={styles.avatar}
              size={85}
              name="doctor"
            />
          </TouchableOpacity>
          <Text style={styles.avatartext}>COVID-19</Text>
=======
export default function PersonalPage({handleTranslate}) {
    const navigation = useNavigation();
    console.log({handleTranslate})

    return(
        <View style={styles.pageWrapper}>
            <NavBar/>
            <View style={styles.wrapper}>
                <View>
                    <TouchableOpacity style={styles.buttonavatar} onPress={() => navigation.navigate("TimeOffForm")}>
                        <MaterialCommunityIcons style={styles.avatar} size={85} name="calendar-account" />
                    </TouchableOpacity>
                    <Text style={styles.avatartext}>{handleTranslate("Time Off")}</Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.buttonavatar} onPress={() => navigation.navigate("MeetingsForm")}>
                        <AntDesign style={styles.avatar} size={85} name='team'  />
                    </TouchableOpacity>
                    <Text style={styles.avatartext}>MEETINGS</Text>
                </View>
                <View style={styles.belows}>
                    <TouchableOpacity style={styles.buttonavatar} onPress={() => navigation.navigate("SickDayForm")}>
                        <AntDesign style={styles.avatar} size={85} name='deleteuser' />
                    </TouchableOpacity>
                    <Text style={styles.avatartext}>SICK DAY</Text>
                </View>
                <View style={styles.belows}>
                    <TouchableOpacity style={styles.buttonavatar} onPress={() => navigation.navigate("CovidPage")}>
                        <MaterialCommunityIcons style={styles.avatar} size={85} name='doctor'  />
                    </TouchableOpacity>
                    <Text style={styles.avatartext}>COVID-19</Text>
                </View>
            </View>
>>>>>>> 3c025620377a27c0feebf826183c210b550e8cd5
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pageWrapper: {
    height: '100%',
  },
  wrapper: {
    marginTop: 100,
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 25,
    marginLeft: 25,
    paddingTop: 25,
    color: '#E6BE8A',
  },
  avatartext: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#00486D',
  },
  belows: {
    marginTop: 65,
  },
});
