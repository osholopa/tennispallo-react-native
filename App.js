import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, FlatList, Alert } from 'react-native'

export default function App() {
  const [events, setEvents] = useState([])

  useEffect(() => {
    getEvents('tennis')
  }, [])
  
const getEvents = type => {
  const baseUrl = 'http://dev.api.northly.fi/reservations'
  const today = new Date().toISOString().split('T')[0]
  const url = `${baseUrl}?date=${today}&type=${type}`
  fetch(url)
  .then((response) => response.json())
  .then((data) => {
    setEvents(data)
  })
  .catch((error) => {
    Alert.alert('Error', error);
  })
}
  
  const handleReserveButtonClick = event => {
    console.log('Reserve event:', event)
  }

  return (
    <View style={styles.container}>
      <Text>Tennispallo</Text>
      {events.length === 0 ? null : (
        <FlatList
        style={{ marginTop: 50, flex: 1, backgroundColor: '#fafafa', width: 395}}
        data={events}
        renderItem={({ item }) => (
          <View style={{margin: 10}}>
            <Text>ID: {item.id}</Text>
            <Text>Type: {item.type}</Text>
            <Text>Court: {item.courtId}</Text>
            <Text>Start: {item.start}</Text>
            <Text>End: {item.end}</Text>
            <Button title={'varaa'} onPress={() => handleReserveButtonClick(item)} />
          </View>
        )}
      />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
