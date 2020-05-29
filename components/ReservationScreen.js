import React, { useState, useEffect } from 'react'
import { StyleSheet,  View } from 'react-native'
import { getEvents } from '../services/eventService'
import EventTable from './EventTable'
import Datepicker from './Datepicker'

export default function ReservationScreen({ navigation }) {

  const [events, setEvents] = useState([])
  const [date, setDate] = useState(new Date());
  
  useEffect(() => {
    getEvents(date)
      .then((data) => {
        setEvents(data)
        console.log(`Fetched ${data.length} reservations from API`)
      })
  }, [date])

  return (
    <View style={styles.container}>
      <EventTable events={events}/>
      <Datepicker date={date} setDate={setDate} events={events}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 0,
    backgroundColor: 'black' }
})