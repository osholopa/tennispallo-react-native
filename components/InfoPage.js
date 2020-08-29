import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function InfoPage() {
  return (
    <View style={styles.container}>
      <Text style={{ color: 'white', fontSize: 24 }}>Ohjeet:</Text>
      <Text style={{ color: 'white', fontSize: 24 }}>
        Paina Varaa-nappia haluamasi vuoron kohdalla varataksesi vuoron
      </Text>
      <Text style={{ color: 'white', fontSize: 24 }}>
        Päivämäärävalitsimella voit hakea varaukset haluamallesi päivälle
      </Text>
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
})
