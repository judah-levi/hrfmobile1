import React, {useState} from "react";
import {Title} from 'react-native-paper'
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import auth from '@react-native-firebase/auth'


export default function LoginPage() {
  const [errorMessage, setErrorMessage] = useState(null)
  const [firstName, onChangeFirstName] = useState("");
  const [lastName, onChangeLastName] = useState("");
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const navigation = useNavigation();

  handleSignUp = () =>  {
    auth().createUserWithEmailAndPassword(email, password)
    .then(() => useNavigation.navigate('MainPage'))
    .catch(error => setErrorMessage({ errorMessage: error.message }))
    
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          style={styles.logo}
          source={require("../pics/HeaderLogo_180x.png")} 
        />
        <Title style={styles.titleText}>
            Welcome to the team!
        </Title>
        <TextInput
          style={styles.input}
          onChangeText={(firstName) => onChangeFirstName(firstName)}
          clearTextOnFocus
          placeholder='First Name'
        />
        <TextInput
          style={styles.input}
          onChangeText={(lastName) => onChangeLastName(lastName)}
          clearTextOnFocus
          placeholder='Last Name'
        />
        <TextInput
          style={styles.input}
          onChangeText={(email) => onChangeEmail(email)}
          clearTextOnFocus
          placeholder='Email'
        />
        <TextInput
          style={styles.input}
          onChangeText={(password) => onChangePassword(password)}
          clearTextOnFocus
          secureTextEntry={true}
          placeholder= 'Password'
        />
        <TouchableOpacity
          style={styles.newButton}
          onPress={handleSignUp}
        >
          <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00486D",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#00486D",
    width: 350,
    height: 500,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    zIndex: 0,
  },
  logInSingUp: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: 250,
    marginBottom: 20,
  },
  logIn: {
    flex: 1,
    fontWeight: "bold",
  },
  signUp: {
    flex: 1,
  },
  title: {
    color: "black",
    textDecorationColor: "yellow",
    textShadowColor: "red",
    textShadowRadius: 1,
    margin: 24,
    fontSize: 30,
  },
  newButton: {
    alignItems: "center",
    borderColor: "#fff",
    borderWidth: 1,
    marginTop: 30,
    padding: 5,
    borderRadius: 5,
    width: 250,
    height: 40
  },
  buttonText:  {
    color: '#fff',
  },
  titleText:  {
    color: '#fff',
    marginBottom: 10
  },
  textView: {
    marginTop: 20,
  },
  input: {
    height: 40,
    width: 250,
    backgroundColor: "#fff",
    marginBottom: 10,
    borderRadius: 5,
    padding: 10,
  },
  logo: {
    height: 125,
    width: 125,
    marginBottom: 50,
  },
});