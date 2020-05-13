import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, Alert, ScrollView, Dimensions, TouchableOpacity } from 'react-native'
const DimensionsWindowWidth = Dimensions.get("window").width;
import { Table, Row, Rows, Col, Cols, TableWrapper } from 'react-native-table-component';

export default function App() {
  const [events, setEvents] = useState([])

  const tableHead = ['Court 1', 'Court 2', 'Court 3', 'Court 4', 'Court 5', 'Court 6']
  const widthArr = [160, 160, 160, 160, 160, 160]

  useEffect(() => {
    getEvents('tennis')
    console.log(DimensionsWindowWidth)
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
    console.log('Reserve event:', event.id)
  }

  const renderButton = (event) => (
    <View style={styles.cell}>
      <Text style={styles.text}>Court ID: {event.courtId}</Text>
      <Text style={styles.text}>Start: {event.start}</Text>
      <Text style={styles.text}>End: {event.end}</Text>
      <TouchableOpacity onPress={() => handleReserveButtonClick(event)}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>Reserve</Text>
        </View>
      </TouchableOpacity>
    </View>
  )

  const tableData = [];

  for (let i = 1; i <= 6; i++) {
    let columndata = []
    events.forEach(event => {
      if (Number(event.courtId) === i) {
        columndata.push(renderButton(event))
      }
    })
    tableData.push(columndata)
  }


  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <View>
          <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
            <Row data={tableHead} widthArr={widthArr} style={styles.header} textStyle={styles.text} />
          </Table>
          <ScrollView style={styles.dataWrapper}>
            <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
              <TableWrapper style={{ flex: 1 }}>
                <Cols data={tableData} widthArr={widthArr} heightArr={[100, 100, 100, 100, 100, 100, 100, 100]} textStyle={styles.text} />
              </TableWrapper>
            </Table>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  header: { height: 50, backgroundColor: '#10a300' },
  text: { textAlign: 'center', fontSize: 8 },
  dataWrapper: { marginTop: -1 },
  row: { height: 40, backgroundColor: '#E7E6E1' },
  btn: { width: 58, height: 18, marginLeft: 15, backgroundColor: '#c8e1ff', borderRadius: 2 },
  btnText: { textAlign: 'center' },
  cell: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

