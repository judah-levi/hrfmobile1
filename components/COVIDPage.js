import React, {useState, useEffect, useContext} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {TextInput, RadioButton} from 'react-native-paper';
import Navbar from './NavBar';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import * as RNLocalize from 'react-native-localize';
import {stateContext} from './context';

function CovidPage() {
  const navigation = useNavigation();
  const {translate, handleLocalizationChange} = useContext(stateContext);

  useEffect(() => {
    RNLocalize.addEventListener('change', handleLocalizationChange);
    setTimeout(() => {
      RNLocalize.removeEventListener('change', handleLocalizationChange);
    }, 2000);
  }, []);

  return (
    <ScrollView>
      {/* {dwdwa} */}
      <View>
        <Navbar />
        <Text style={styles.p}>{translate('Covid Statement')}</Text>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={styles.col1}
            onPress={() => navigation.navigate('CovidFormEn')}>
            <Text style={styles.btnText}>{translate('Form')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  p: {
    fontSize: 15,
    textAlign: 'left',
    margin: 20,
    marginBottom: 0,
  },
  btnText: {
    backgroundColor: '#00486D',
    textAlign: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    height: 50,
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  col1: {
    marginTop: 30,
    width: '50%',
  },
});

export default CovidPage;
