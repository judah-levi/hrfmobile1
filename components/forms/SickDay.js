import React, {Component} from 'react';
import { StyleSheet, ScrollView, Text, View, TouchableOpacity, Form } from 'react-native';
import {Picker} from '@react-native-community/picker';
import {TextInput} from 'react-native-paper';
import Navbar from '../NavBar';
import CalendarPicker from 'react-native-calendar-picker';
import Moment from 'moment';
import axios from 'axios';
import { useNavigation } from "@react-navigation/native";

class SickDay extends React.Component {
  state = {
    formData: '',
  };

  onDateChange = (date, type) => {
    let state = this.state.formData;
    if (type === 'END_DATE') {
      (state.dateEnd = date),
        this.setState({
          formData: state,
        });
    } else {
      state.dateStart = date;
    //   state.dateEnd = "";
      this.setState({
        formData: state,
      });
    }
  };

  handleChange = (name, value) => {
    this.setState((previousState) => {
      let previousFormData = previousState.formData;
      return {
        ...previousState,
        formData: {
          ...previousFormData,
          [name]: value,
        },
      };
    });
  };

    sendEmail = () =>  {
        axios.post('https://us-central1-hrfmobile-5638b.cloudfunctions.net/submitSickDay', this.state.formData)
    };

    
    render() {
        Moment.locale('en');
        const {formData} = this.state;
        const minDate = new Date();
        const maxDate = new Date(2090, 1, 1);
        const { navigation } = this.props;
        
   return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <Navbar />
        <Text style={styles.hOneTimeOff}>Declare a Sick Day</Text>
        <View style={styles.timeOffWrapper}>
          <TextInput
            theme={{ colors: { primary: "#00486D" }}}
            selectionColor={'white'}
            autoCapitalize="words"
            underlineColorAndroid={'#00486D'}
            name="firstname"
            style={styles.timeOffInput}
            placeholder="First name"
            value={formData.firstname}
            onChangeText={(firstname) =>
              this.handleChange('firstname', firstname)
            }
          />
          <TextInput
            theme={{ colors: { primary: "#00486D" }}}
            selectionColor={'white'}
            autoCapitalize="words"
            underlineColorAndroid={'#00486D'}
            name="lastname"
            style={styles.timeOffInput}
            placeholder="Last name"
            value={formData.lastname}
            onChangeText={(lastname) => this.handleChange('lastname', lastname)}
          />
          <Picker
            name="role"
            style={styles.timeOffPicker}
            value={formData.role}
            selectedValue={formData.role}
            onValueChange={(role) => this.handleChange('role', role)}>
            <Picker.Item label="What's your role?" value="" />
            <Picker.Item label="Warehouse" value="Warehouse" />
            <Picker.Item label="Bakery" value="Bakery" />
            <Picker.Item label="Dry pack" value="Dry pack" />
            <Picker.Item label="Dry mix" value="Dry mix" />
            <Picker.Item label="Maintenance" value="Maintenance" />
            <Picker.Item label="Mechanical" value="Mechanical" />
          </Picker>
          <View style={styles.container}>
            <CalendarPicker
              startFromMonday={true}
              allowRangeSelection={true}
              minDate={minDate}
              maxDate={maxDate}
              selectedDayColor="#00486D"
              selectedDayTextColor="#FFFFFF"
              onDateChange={this.onDateChange}
            />
          </View>
          <TouchableOpacity
            style={styles.btnTimeOff}
            onPress={(event) => {
                event.preventDefault();
                console.log(this.state.formData)
                this.sendEmail();
                navigation.navigate("MainPage");            
            }}>
            <Text style={styles.btnTextTimeOff}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
};

export default function(props) {
    const navigation = useNavigation();
  
    return <SickDay {...props} navigation={navigation} />;
  }

const styles = StyleSheet.create({
  timeOffWrapper: {
    marginTop: '4%',
    marginLeft: 15,
    marginRight: 15,
  },
  hOneTimeOff: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: '6%',
  },
  timeOffPicker: {
    backgroundColor: 'white',
    marginBottom: '3%',
    marginTop: '1%',
  },
  timeOffInput: {
    marginBottom: '1%',
    backgroundColor: 'white',
  },
  btnTimeOff: {
    marginTop: 10,
    borderRadius: 5,
  },
  btnTextTimeOff: {
    backgroundColor: '#00486D',
    textAlign: 'center',
    padding: 15,
    borderRadius: 5,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  container: {
    backgroundColor: '#FFFFFF',
  },
});