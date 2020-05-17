import React from 'react'
import { StyleSheet,  View, Text } from 'react-native'

export default function UserPage() {
 
  return (
    <View style={styles.container}>
      <Text style={{color: 'white', fontSize: 24}}>Käyttäjän sivu</Text>
      <Text style={{color: 'white', fontSize: 24}}>Tänne tulee käyttäjän tietoja ym.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 16, 
    paddingTop: 30, 
    backgroundColor: 'black' }
})