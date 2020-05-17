import React from 'react'
import { StyleSheet,  View, Text } from 'react-native'

export default function InfoPage() {
 
  return (
    <View style={styles.container}>
      <Text style={{color: 'white', fontSize: 24}}>Tervetuloa tennispallo-appiin</Text>
      <Text style={{color: 'white', fontSize: 24}}>Tällä ohjelmalla voit (sitten kun se on valmis) tehdä ja poistaa varauksia liikuntakeskuksen tennis- ja sulkapallokentille</Text>
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