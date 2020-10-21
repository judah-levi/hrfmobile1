import React, {useState} from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import auth from '@react-native-firebase/auth'
import { useNavigation } from "@react-navigation/native";
import {HelperText, TextInput} from 'react-native-paper'


export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState('')
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState('');
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const [error, setError] = useState(false)
  const admin = "dan@hudsonriverfoods.com"
  const admin2 = "kolamiti92@gmail.com"
  const admin3 = "nicovg_95@hotmail.com"

  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }

  async function confirmCode() {
    try {
      await confirm.confirm(code);
    } catch (error) {
      console.log('Invalid code.');
    }
  }

  handleLogin = () =>  {
    auth().signInWithEmailAndPassword(email, password)
    .then(()=> {
      if(email == admin || email == admin2 || email == admin3) {
        navigation.navigate("AdminPage")
      } else  {
        navigation.navigate("MainPage")
      }
    }) 
    .catch(() => setError(true))
  } 

  if (!confirm) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          style={styles.logo}
          source={require("../pics/HeaderLogo_180x.webp")} 
        />
        <TextInput
          value={phoneNumber}
          style={styles.input}
          onChangeText={(num) => setPhoneNumber(num)}
          clearTextOnFocus
          placeholder='Phone Number'
        />
        <Text style={styles.helperText}>{error ? "Login has failed. Please try again." : "" }</Text>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => signInWithPhoneNumber(phoneNumber)}
        >
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  }
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          style={styles.logo}
          source={require("../pics/HeaderLogo_180x.webp")} 
        />
        <TextInput
          value={code}
          style={styles.input}
          onChangeText={(code) => setCode(code)}
          clearTextOnFocus
          secureTextEntry={true}
          placeholder= 'Verification Code'
          />
        <Text style={styles.helperText}>{error ? "Login has failed. Please try again." : "" }</Text>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => confirmCode()}
        >
          <Text style={styles.buttonText}>Confirm verification code</Text>
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
  loginButton: {
    alignItems: "center",
    borderColor: "#fff",
    borderWidth: 1,
    marginTop: 30,
    padding: 5,
    borderRadius: 5,
    width: 250,
    height: 40
  },
  signupButton: {
    paddingLeft: 8,
  },
  buttonText:  {
    color: '#fff',
  },
  signupButtonText:  {
    color: '#fff',
    fontWeight: 'bold'
  },
  signupView: {
    marginTop: 20,
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center'
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
  helperText:  {
    marginTop: 10,
    color: 'red',
    fontWeight: 'bold'
  }
});