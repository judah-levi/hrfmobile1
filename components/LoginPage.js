import React, {useState} from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import auth from '@react-native-firebase/auth'
import { useNavigation } from "@react-navigation/native";


export default function LoginPage() {
  const [errorMessage, setErrorMessage] = useState(null)
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const navigation = useNavigation();
  const admin = "kolamiti92@gmail.com"
  const [role, setRole] = useState("")

  handleLogin = () =>  {
    auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      if(email == admin)  {
        setRole({role: "admin"})
        navigation.navigate("AdminPage")
      } else  {
        setRole({role: "user"})
        navigation.navigate("MainPage")
      }
    })
    .catch(error => setErrorMessage({ errorMessage: error.message }))
  }


  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          style={styles.logo}
          source={require("../pics/HeaderLogo_180x.png")} 
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
          style={styles.loginButton}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.signupView}>
          <Text style={styles.buttonText}>Don't have an account?</Text>
          <TouchableOpacity
            style={styles.signupButton}
            onPress={() => navigation.navigate("Signup")}
          >
            <Text style={styles.signupButtonText}>Signup</Text>
          </TouchableOpacity>
        </View>
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
});