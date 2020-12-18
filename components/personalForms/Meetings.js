import React, {useContext, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from 'react-native';
import {Picker} from '@react-native-community/picker';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import * as RNLocalize from 'react-native-localize';
import {stateContext} from '../context/context';
import Nav from '../Nav';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
    <View style={styles.mainWrapper}>
      <Nav />
      <View style={styles.rightWrapper}>
        <ImageBackground
          source={require('../../pics/fondos-2.png')}
          style={styles.rightBackground}>
          <View style={styles.titleWrapper}>
            <MaterialCommunityIcons
              name="account-outline"
              style={styles.mainTitleIcon}
            />
            <Text style={styles.mainTitle}>{translate('Meetings2')}</Text>
          </View>
        </ImageBackground>
        <View style={styles.meetingWrapper}>
          <TextInput
            selectionColor={'white'}
            autoCapitalize="words"
            name="firstname"
            style={styles.meetingInput}
            placeholder={translate('First Name')}
            value={formData.firstname}
            onChangeText={(firstname) => setFormData({...formData, firstname})}
          />
          <TextInput
            selectionColor={'white'}
            autoCapitalize="words"
            name="lastname"
            style={styles.meetingInput}
            placeholder={translate('Last Name')}
            value={formData.lastname}
            onChangeText={(lastname) => setFormData({...formData, lastname})}
          />
          <View style={styles.pickerWrapper}>
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
              <Picker.Item
                label={translate('Maintenance')}
                value="Maintenance"
              />
              <Picker.Item label={translate('Mechanical')} value="Mechanical" />
            </Picker>
          </View>
          <View style={styles.pickerWrapper}>
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
          </View>
          <TextInput
            selectionColor={'white'}
            autoCapitalize="sentences"
            name="meetingDescription"
            style={styles.textTareaInput}
            placeholder={translate('Meeting desc')}
            multiline={true}
            numberOfLines={7}
            value={formData.meetingDescription}
            onChangeText={(meetingDescription) =>
              setFormData({...formData, meetingDescription})
            }
          />
          <TouchableOpacity style={styles.btnMeeting} onPress={handleSubmit}>
            <Text style={styles.btnTextMeeting}>{translate('Submit btn')}</Text>
          </TouchableOpacity>
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
  meetingWrapper: {
    marginTop: -355,
    marginLeft: 20,
    marginRight: 20,
  },
  pickerWrapper: {
    borderRadius: 10,
    marginBottom: '3%',
    height: 55,
    overflow: 'hidden',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    elevation: 3,
  },
  meetingPicker: {
    backgroundColor: 'white',
    height: 55,
  },
  meetingInput: {
    marginBottom: '3%',
    paddingLeft: 10,
    backgroundColor: 'white',
    height: 55,
    borderRadius: 10,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    elevation: 3,
  },
  textTareaInput: {
    marginBottom: '3%',
    paddingLeft: 10,
    backgroundColor: 'white',
    textAlignVertical: 'top',
    borderRadius: 10,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    elevation: 3,
  },
  btnMeeting: {
    marginTop: '6%',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '50%',
  },
  btnTextMeeting: {
    backgroundColor: '#0db4e8',
    textAlign: 'center',
    padding: 15,
    borderRadius: 30,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    elevation: 3,
  },
});

export default Meetings;
