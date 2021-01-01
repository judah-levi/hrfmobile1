import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  ScrollView,
} from 'react-native';
import {Picker} from '@react-native-community/picker';
import CalendarPicker from 'react-native-calendar-picker';
import Moment from 'moment';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import * as RNLocalize from 'react-native-localize';
import {stateContext} from '../context/context';
import Nav from '../Nav';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

class TimeOff extends React.Component {
  static contextType = stateContext;
  state = {
    formData: '',
  };

  componentDidMount() {
    this.context.setI18nConfig();
    RNLocalize.addEventListener(
      'change',
      this.context.handleLocalizationChange,
    );
  }

  componentWillUnmount() {
    RNLocalize.removeEventListener(
      'change',
      this.context.handleLocalizationChange,
    );
  }

  onDateChange = (date, type) => {
    let state = this.state.formData;
    if (type === 'END_DATE') {
      state.maxDate = date;
    } else {
      state.minDate = date;
      state.maxDate = null;
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

  sendEmail = () => {
    axios.post(
      'https://us-central1-hrfmobile-5638b.cloudfunctions.net/submitTimeOff',
      this.state.formData,
    );
  };

  render() {
    const {translate} = this.context;
    Moment.locale('en');
    const {formData} = this.state;
    const minDate = new Date();
    const maxDate = new Date(2090, 0, 1);
    const {navigation} = this.props;

    return (
      <View style={styles.mainWrapper}>
        <Nav />
        <ScrollView
          style={styles.rightWrapper}
          showsVerticalScrollIndicator={false}>
          {/* <ImageBackground
            source={require('../../pics/ballena.png')}
            style={styles.rightBackground}> */}
          <View style={styles.titleWrapper}>
            <MaterialCommunityIcons
              name="account-outline"
              style={styles.mainTitleIcon}
            />
            <Text style={styles.mainTitle}>
              {translate('Schedule Time Off')}
            </Text>
          </View>
          <View style={styles.timeOffWrapper}>
            <TextInput
              selectionColor={'white'}
              autoCapitalize="words"
              name="firstname"
              style={styles.timeOffInput}
              placeholder={translate('First Name')}
              value={formData.firstname}
              onChangeText={(firstname) =>
                this.handleChange('firstname', firstname)
              }
            />
            <TextInput
              selectionColor={'white'}
              autoCapitalize="words"
              name="lastname"
              style={styles.timeOffInput}
              placeholder={translate('Last Name')}
              value={formData.lastname}
              onChangeText={(lastname) =>
                this.handleChange('lastname', lastname)
              }
            />
            <View style={styles.pickerWrapper}>
              <Picker
                selectionColor={'white'}
                autoCapitalize="words"
                name="role"
                style={styles.timeOffPicker}
                value={formData.role}
                selectedValue={formData.role}
                onValueChange={(role) => this.handleChange('role', role)}>
                <Picker.Item label={translate('Role selector')} value="" />
                <Picker.Item label={translate('Warehouse')} value="Warehouse" />
                <Picker.Item label={translate('Bakery')} value="Bakery" />
                <Picker.Item label={translate('Dry Pack')} value="Dry pack" />
                <Picker.Item label={translate('Dry Mix')} value="Dry mix" />
                <Picker.Item
                  label={translate('Maintenance')}
                  value="Maintenance"
                />
                <Picker.Item
                  label={translate('Mechanical')}
                  value="Mechanical"
                />
              </Picker>
            </View>
            <View style={styles.container}>
              <CalendarPicker
                weekdays={[
                  translate('Monday'),
                  translate('Tuesday'),
                  translate('Wenesday'),
                  translate('Thursday'),
                  translate('Friday'),
                  translate('Saturday'),
                  translate('Sunday'),
                ]}
                months={[
                  translate('January'),
                  translate('February'),
                  translate('March'),
                  translate('April'),
                  translate('May'),
                  translate('June'),
                  translate('July'),
                  translate('August'),
                  translate('September'),
                  translate('October'),
                  translate('November'),
                  translate('December'),
                ]}
                previousTitle={translate('Previous')}
                nextTitle={translate('Next')}
                selectMonthTitle={translate('SelectMonth')}
                selectYearTitle={translate('SelectYear')}
                style={styles.calendar}
                width={320}
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
                console.log('time off', this.state.formData);
                this.sendEmail();
                navigation.navigate('MainPage');
              }}>
              <Text style={styles.btnTextTimeOff}>
                {translate('Submit btn')}
              </Text>
            </TouchableOpacity>
          </View>
          {/* </ImageBackground> */}
        </ScrollView>
      </View>
    );
  }
}

export default function (props) {
  const navigation = useNavigation();

  return <TimeOff {...props} navigation={navigation} />;
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
  timeOffWrapper: {
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
  },
  pickerWrapper: {
    borderRadius: 10,
    height: 55,
    overflow: 'hidden',
    marginBottom: '3%',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    elevation: 3,
  },
  timeOffPicker: {
    backgroundColor: 'white',
    height: 55,
  },
  timeOffInput: {
    marginBottom: '3%',
    paddingLeft: 10,
    backgroundColor: 'white',
    height: 55,
    borderRadius: 10,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    elevation: 3,
  },
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: '9%',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    elevation: 3,
  },
  btnTimeOff: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '50%',
    marginBottom: 30,
  },
  btnTextTimeOff: {
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
