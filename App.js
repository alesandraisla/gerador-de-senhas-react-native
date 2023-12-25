import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [size, setSize] = useState(10)
  const [passwordValue, setPasswordValue] = useState('')
  const [isModalView, setIsModalView] = useState(false)

  function generatePassword() {
    let password = "";

    for(let i = 0, n = charset.length; i < size; i++ ) {
      password += charset.charAt(Math.floor(Math.random() * n))
    }

    setPasswordValue(password)
    setIsModalView(true)

  }
  return (
    <View style={styles.container}>
       <Image 
        source={require("./src/assets/logo.jpg")}
        style={styles.logo}
      />
      <Text style={styles.title}>{size} Caracteres</Text>

      <View style={styles.area}>
      </View>

      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>Gerar senha</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1e4f6',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: 200,
    height: 200,
    borderRadius: 40,
    marginBottom: 60,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 30,
  },

  area: {
    marginTop: 14,
    marginBottom: 14,
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 8,
  },

  button: {
    backgroundColor: '#51194e',
    width: '80%',
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginBottom: 18,


  },

  buttonText: {
    color: "#fffbf4",
    fontSize: 20,
  }
});
