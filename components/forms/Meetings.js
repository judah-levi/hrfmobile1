import React, {useState, useContext, useEffect} from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {TextInput} from 'react-native-paper';
import Navbar from '../NavBar';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import * as RNLocalize from 'react-native-localize';
import {stateContext} from '../context';

function Meetings() {
  const navigation = useNavigation();
  const [selectedRoleValue, setSelectedRoleValue] = React.useState('');
  const [selectedEmailValue, setSelectedEmailValue] = React.useState('');
  const [formData, setFormData] = React.useState({});
  const {translate, handleLocalizationChange} = useContext(stateContext);

  useEffect(() => {
    RNLocalize.addEventListener('change', handleLocalizationChange);
    setTimeout(() => {
      RNLocalize.removeEventListener('change', handleLocalizationChange);
    }, 2000);
  }, []);

  const handleRolePicker = (role) => {
    setSelectedRoleValue(role), setFormData({...formData, role});
  };

  const handleEmailPicker = (contactEmail) => {
    setSelectedEmailValue(contactEmail),
      setFormData({...formData, contactEmail});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({data: formData});
    sendEmail();
    navigation.navigate('MainPage');
  };

  const sendEmail = () => {
    axios.post(
      'https://us-central1-hrfmobile-5638b.cloudfunctions.net/submitMeetingReq',
      formData,
    );
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Navbar />
      <Text style={styles.hOneMeeting}>{translate('Meetings')}</Text>
      <View style={styles.meetingWrapper}>
        <TextInput
          theme={{colors: {primary: '#00486D'}}}
          selectionColor={'white'}
          autoCapitalize="words"
          underlineColorAndroid={'#00486D'}
          name="firstname"
          style={styles.meetingInput}
          placeholder={translate('First Name')}
          value={formData.firstname}
          onChangeText={(firstname) => setFormData({...formData, firstname})}
        />
        <TextInput
          theme={{colors: {primary: '#00486D'}}}
          selectionColor={'white'}
          autoCapitalize="words"
          underlineColorAndroid={'#00486D'}
          name="lastname"
          style={styles.meetingInput}
          placeholder={translate('Last Name')}
          value={formData.lastname}
          onChangeText={(lastname) => setFormData({...formData, lastname})}
        />
        <TextInput
          theme={{colors: {primary: '#00486D'}}}
          selectionColor={'white'}
          underlineColorAndroid={'#00486D'}
          name="phoneNumber"
          style={styles.meetingInput}
          placeholder={translate('Phone Num')}
          value={formData.phoneNumber}
          onChangeText={(phoneNumber) =>
            setFormData({...formData, phoneNumber})
          }
        />
        <Picker
          style={styles.meetingPicker}
          name="role"
          value={formData.role}
          selectedValue={selectedRoleValue}
          onValueChange={(role) => handleRolePicker(role)}>
          <Picker.Item label={translate('Role selector')} value="" />
          <Picker.Item label={translate('Warehouse')} value="Warehouse" />
          <Picker.Item label={translate('Bakery')} value="Bakery" />
          <Picker.Item label={translate('Dry Pack')} value="Dry pack" />
          <Picker.Item label={translate('Dry Mix')} value="Dry mix" />
          <Picker.Item label={translate('Maintenance')} value="Maintenance" />
          <Picker.Item label={translate('Mechanical')} value="Mechanical" />
        </Picker>
        <Picker
          style={styles.meetingPicker}
          name="contactEmail"
          value={formData.contactEmail}
          selectedValue={selectedEmailValue}
          onValueChange={(contactEmail) => handleEmailPicker(contactEmail)}>
          <Picker.Item label={translate('Meeting selector')} value="" />
          <Picker.Item
            label={translate('Dry Mix/Pack Supervisor')}
            value="manuel@hudsonriverfoods.com"
          />
          <Picker.Item
            label={translate('Bakery Supervisor')}
            value="ambar@hudsonriverfoods.com"
          />
          <Picker.Item
            label={translate('Maintenance Manager')}
            value="jerryhof@hudsonriverfoods.com"
          />
          <Picker.Item
            label={translate('Facilities Manager')}
            value="victor@hudsonriverfoods.com"
          />
          <Picker.Item
            label={translate('Purchasing Manager')}
            value="phil@hudsonriverfoods.com"
          />
          <Picker.Item
            label={translate('Quality Assurance Manager')}
            value="steve@hudsonriverfoods.com"
          />
          <Picker.Item
            label={translate('Warehouse/DTC Manager')}
            value="willis@hudsonriverfoods.com"
          />
        </Picker>
        <TextInput
          theme={{colors: {primary: '#00486D'}}}
          selectionColor={'white'}
          autoCapitalize="sentences"
          underlineColorAndroid={'#00486D'}
          name="meetingDescription"
          style={styles.meetingInput}
          placeholder={translate('Meeting desc')}
          multiline={true}
          value={formData.meetingDescription}
          onChangeText={(meetingDescription) =>
            setFormData({...formData, meetingDescription})
          }
        />
        <TouchableOpacity style={styles.btnMeeting} onPress={handleSubmit}>
          <Text style={styles.btnTextMeeting}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  meetingWrapper: {
    marginTop: '4%',
    marginLeft: 15,
    marginRight: 15,
  },
  hOneMeeting: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: '6%',
  },
  meetingPicker: {
    backgroundColor: 'white',
    marginBottom: '2%',
  },
  meetingInput: {
    marginBottom: '2%',
    backgroundColor: 'white',
  },
  btnMeeting: {
    marginTop: 10,
    borderRadius: 5,
  },
  btnTextMeeting: {
    backgroundColor: '#00486D',
    textAlign: 'center',
    padding: 15,
    borderRadius: 5,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default Meetings;
