import React, { Component,useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import Moment from 'moment';

export default class CalendarTimeOff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
      selectedEndDate: null,
    };
  }
 
  onDateChange = (date, type) => {
    if (type === 'END_DATE') {
      this.setState({
        selectedEndDate: date,
      });
    } else {
      this.setState({
        selectedStartDate: date,
        selectedEndDate: null,
      });
    }
  }
 
  render() {
    Moment.locale('en')
    const { selectedStartDate, selectedEndDate } = this.state;
    const minDate = new Date();
    const maxDate = new Date(2090, 0, 1);
    const startDate  =  selectedStartDate ? selectedStartDate.toString() : '';
    const endDate = selectedEndDate ? selectedEndDate.toString() : '';
 
    return (
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
        <View>
          <Text>Start Date: {Moment(startDate).format("M/D/YYYY")}</Text>
          <Text>End Date: {Moment(endDate).format("M/D/YYYY")}</Text>
        </View>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#FFFFFF',
  },
});