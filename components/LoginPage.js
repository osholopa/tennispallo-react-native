import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native'
import { firebase } from './auth/Firebase'

export default function LoginPage({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const login = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate('Varauskalenteri')
        console.log(`Logging in uid ${firebase.auth().currentUser.uid}`)
      })
      .catch((error) => {
        console.log(error, error.code)
        Alert.alert(`Error: ${error.message}`)
      })
  }

  return (
    <View style={styles.container}>
      <Text style={{ color: 'white', fontSize: 24 }}>Kirjaudu sisään</Text>
      <TextInput
        style={styles.textInput}
        selectionColor={'white'}
        placeholder={'Sähköpostiosoite'}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        secureTextEntry={true}
        style={styles.textInput}
        placeholder={'Salasana'}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="kirjaudu" onPress={() => login()} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: 'black',
  },
  textInput: {
    color: 'white',
  },
})
