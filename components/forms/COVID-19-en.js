import React, {useState} from 'react'
import {StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TextInput, RadioButton } from 'react-native-paper';
import Navbar from '../NavBar'
import axios from 'axios';
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from 'react-native-gesture-handler';

function CovidFormEn(){
    const navigation = useNavigation();
    const [formData, setFormData] = useState({ timeStamp:new Date()});
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');
    const [value4, setValue4] = useState('');
    const [value5, setValue5] = useState('');
    const [value6, setValue6] = useState('');
    const [value7, setValue7] = useState('');
    const [value8, setValue8] = useState('');
    const [certify, setCertify] = useState('');

    const sendEmail = () =>  {
        axios.post('https://us-central1-hrfmobile-5638b.cloudfunctions.net/submitCovidForm', formData)
    };

    const handleSubmit = event =>  {
        event.preventDefault()
        console.log({data: formData})
        sendEmail()
        navigation.navigate("MainPage")
    }

    const handleValue1  = (value1) =>  {
        setValue1(value1),
        setFormData({...formData, value1})
    }

    const handleValue2  = (value2) =>  {
        setValue2(value2),
        setFormData({...formData, value2})
    }

    const handleValue3  = (value3) =>  {
        setValue3(value3),
        setFormData({...formData, value3})
    }

    const handleValue4  = (value4) =>  {
        setValue4(value4),
        setFormData({...formData, value4})
    }

    const handleValue5  = (value5) =>  {
        setValue5(value5),
        setFormData({...formData, value5})
    }

    const handleValue6  = (value6) =>  {
        setValue6(value6),
        setFormData({...formData, value6})
    }

    const handleValue7  = (value7) =>  {
        setValue7(value7),
        setFormData({...formData, value7})
    }

    const handleValue8  = (value8) =>  {
        setValue8(value8),
        setFormData({...formData, value8})
    }

    const handleCertify  = (certify) =>  {
        setCertify(certify),
        setFormData({...formData, certify})
    }

    return(
        <ScrollView>
        <View>
            <Navbar />
            <Text style={styles.hOneSuggestion}>HRF COVID-19 HEALTH DECLERATION</Text>
            <Text style={styles.p1}>
                Please answer the following: {"\n"}
                {"\n"}
            </Text>
            <View>
                <Text style={styles.p}>
                    1. Is your temperature higher than 99°F today? {"\n"}
                </Text>
                <RadioButton.Group value={formData.value1}>
                    <View style={styles.radioGroup}>
                        <View style={styles.col1}>
                            <RadioButton.Item value="yes" label="Yes" style={styles.radiobutton} onPress={() => handleValue1('yes')}  />
                        </View>
                        <View style={styles.col2}>
                            <RadioButton.Item value="no" label="No" style={styles.radiobutton} onPress={() => handleValue1('no')} />
                        </View>
                    </View>
                </RadioButton.Group>
            </View>
            <View>
                <Text style={styles.p}>
                    2. Have you had a fever above 99°F at any point during the last week? {"\n"}
                </Text>
                <RadioButton.Group value={formData.value2}>
                    <View style={styles.radioGroup}>
                        <View style={styles.col1}>
                            <RadioButton.Item value="yes" label="Yes" style={styles.radiobutton} onPress={() => handleValue2('yes')} />
                        </View>
                        <View style={styles.col2}>
                            <RadioButton.Item value="no" label="No" style={styles.radiobutton} onPress={() => handleValue2('no')} />
                        </View>
                    </View>
                </RadioButton.Group>
            </View>
            <View>
                <Text style={styles.p}>
                    3. Do you have a cough, chills, nausea, muscle-soreness, loss of smell or taste? {"\n"}
                </Text>
                <RadioButton.Group value={formData.value3}>
                    <View style={styles.radioGroup}>
                        <View style={styles.col1}>
                            <RadioButton.Item value="yes" label="Yes" style={styles.radiobutton} onPress={() => handleValue3('yes')}/>
                        </View>
                        <View style={styles.col2}>
                            <RadioButton.Item value="no" label="No" style={styles.radiobutton} onPress={() => handleValue3('no')}/>
                        </View>
                    </View>
                </RadioButton.Group>
            </View>
            <View>
                <Text style={styles.p}>
                    4. Have you been in contact with someone who is COVID-19 positive, within the last 14 days? {"\n"}
                </Text>
                <RadioButton.Group value={formData.value4}>
                    <View style={styles.radioGroup}>
                        <View style={styles.col1}>
                            <RadioButton.Item value="yes" label="Yes" style={styles.radiobutton} onPress={() => handleValue4('yes')}/>
                        </View>
                        <View style={styles.col2}>
                            <RadioButton.Item value="no" label="No" style={styles.radiobutton} onPress={() => handleValue4('no')}/>
                        </View>
                    </View>
                </RadioButton.Group>
            </View>
            <View>
                <Text style={styles.p}>
                    5. Have you been to a multi-participant gathering or event in the past week? {"\n"}
                </Text>
                <RadioButton.Group value={formData.value5}>
                    <View style={styles.radioGroup}>
                        <View style={styles.col1}>
                            <RadioButton.Item value="yes" label="Yes" style={styles.radiobutton} onPress={() => handleValue5('yes')}/>
                        </View>
                        <View style={styles.col2}>
                            <RadioButton.Item value="no" label="No" style={styles.radiobutton} onPress={() => handleValue5('no')}/>
                        </View>
                    </View>
                </RadioButton.Group>
            </View>
            <View>
                <Text style={styles.p}>
                    6. Have you traveled outside of Albany in the past two weeks? {"\n"}
                </Text>
                <RadioButton.Group value={formData.value6}>
                    <View style={styles.radioGroup}>
                        <View style={styles.col1}>
                            <RadioButton.Item value="yes" label="Yes" style={styles.radiobutton} onPress={() => handleValue6('yes')}/>
                        </View>
                        <View style={styles.col2}>
                            <RadioButton.Item value="no" label="No" style={styles.radiobutton} onPress={() => handleValue6('no')}/>
                        </View>
                    </View>
                </RadioButton.Group>
            </View>
            <View>
                <Text style={styles.p}>
                    7. Do you live with anyone currently or recently in quarantine? {"\n"}
                </Text>
                <RadioButton.Group value={formData.value7}>
                    <View style={styles.radioGroup}>
                        <View style={styles.col1}>
                            <RadioButton.Item value="yes" label="Yes" style={styles.radiobutton} onPress={() => handleValue7('yes')}/>
                        </View>
                        <View style={styles.col2}>
                            <RadioButton.Item value="no" label="No" style={styles.radiobutton} onPress={() => handleValue7('no')}/>
                        </View>
                    </View>
                </RadioButton.Group>
            </View>
            <View>
                <Text style={styles.p}>
                    8. Do you agree to immediately notify Hudson River Foods and remain in isolation if you are exposed to COVID-19?{"\n"}
                </Text>
                <RadioButton.Group value={formData.value8}>
                    <View style={styles.radioGroup}>
                        <View style={styles.col1}>
                            <RadioButton.Item value="yes" label="Yes" style={styles.radiobutton} onPress={() => handleValue8('yes')}/>
                        </View>
                        <View style={styles.col2}>
                            <RadioButton.Item value="no" label="No" style={styles.radiobutton} onPress={() => handleValue8('no')}/>
                        </View>
                    </View>
                </RadioButton.Group>
            </View>
            <View style={styles.suggestionWrapper}>
               <TextInput
                    theme={{ colors: { primary: "#00486D" }}}
                    selectionColor={'white'}
                    autoCapitalize="words"
                    underlineColorAndroid={'#00486D'}                    
                    name="firstname"
                    style={styles.suggestionInput}
                    placeholder="First name"
                    value={formData.firstname}
                    onChangeText={firstname => setFormData({...formData, firstname})}
                />
                <TextInput
                    required={true}
                    theme={{ colors: { primary: "#00486D" }}}
                    name="lastname"
                    style={styles.suggestionInput}
                    placeholder="Last name"
                    value={formData.lastname}
                    autoCapitalize="words"
                    selectionColor={'white'}
                    underlineColorAndroid={'#white'}                    
                    onChangeText={lastname => setFormData({...formData, lastname})}
                />
                <View>
                    <RadioButton.Group value={formData.certify}>
                        <View style={styles.radioGroup}>
                            <View style={styles.col3}>
                                <RadioButton.Item value="yes" style={styles.radiobutton} onPress={() => handleCertify('yes')}/>
                            </View>
                            <View style={styles.col4}>
                                <Text style={styles.p1}>
                                    I certify that the information submitted in this application is true and correct to the best of my knowledge. {"\n"}
                                </Text>
                            </View>
                        </View>
                    </RadioButton.Group>
                </View>
                <TouchableOpacity style={styles.btnSuggestion} onPress={handleSubmit}>
                    <Text style={styles.btnTextSuggestion}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    suggestionWrapper:{
        marginTop: '4%',
        marginLeft: 15,
        marginRight: 15,
        height: '100%'
    },
    hOneSuggestion: {
        fontSize: 23,
        textAlign: 'center',
        marginTop: '6%',
    },
    p: {
        fontSize: 15,
        textAlign: 'left',
        marginLeft: 15, 
        marginRight: 15,
        fontWeight: 'bold',
        marginBottom: -20,
    },
    p1: {
        fontSize: 15,
        textAlign: 'left',
        marginTop: '6%',
        marginLeft: 15, 
        marginRight: 15,
    },
    suggestionInput: {
        backgroundColor: 'white',
        marginBottom: '1%',
        fontSize: 13,
    },
    btnSuggestion: {
        marginTop: 10,
        borderRadius: 2,
    },
    btnTextSuggestion: {
        backgroundColor: "#00486D",
        textAlign: 'center',
        padding: 15,
        borderRadius: 4,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15
    },
    radioGroup: {
        flexDirection: 'row',
    },
    radiobutton:  {
        flexDirection: 'column',
    },
    col3:  {
        width:'10%'    
    }, 
    col4:  {
        width: '90%'
    }
})

export default CovidFormEn