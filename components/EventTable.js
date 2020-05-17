import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView,  TouchableOpacity } from 'react-native'
import { Table, Row, Cols, TableWrapper } from 'react-native-table-component';
import { reserveEvent } from '../services/eventService'

export default function EventTable(props) {
  const { events } = props
  const [tableData, setTableData] = useState([])

  useEffect(() => {
    updateTable(events)
  }, [events])

  const tableHead = ['Kenttä 1', 'Kenttä 2', 'Kenttä 3', 'Kenttä 4', 'Kenttä 5', 'Kenttä 6']
  const widthArr = [160, 160, 160, 160, 160, 160]

  const handleReserveButtonClick = event => {
    console.log('Reserve event:', event.id)
    reserveEvent(event.id)
      .then((response) => {
        console.log('Reserved:')
        console.log(response)
        events.find(event => event.id === response.id).status = response.status
        updateTable(events)
      })
  }

  const cell = (event) => (
    <View style={styles.cell}>
      <Text style={event.status === 'FREE' ? styles.text : styles.grayed}>{event.start.split("T")[1].substr(0, 5) + ' - ' + event.end.split("T")[1].substr(0, 5)}</Text>
      <Text style={event.status === 'FREE' ? styles.text : styles.grayed}>Status: {event.status}</Text>
      {event.status === 'FREE' ? (
        <TouchableOpacity onPress={() => handleReserveButtonClick(event)}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>Reserve</Text>
          </View>
        </TouchableOpacity>
      ) : null}

    </View>
  )

  const updateTable = (events) => {
    const tableData = [];
    if (events.length > 0) {
      for (let i = 1; i <= 6; i++) {
        let columndata = []
        events.forEach(event => {
          if (Number(event.courtId) === i) {
            columndata.push(cell(event))
          }
        })
        tableData.push(columndata)
      }
    }
    setTableData(tableData)
  }

  return (
    <>
      <ScrollView horizontal={true}>
        <View>
          <Table borderStyle={{ borderWidth: 1, borderColor: 'black' }}>
            <Row data={tableHead} widthArr={widthArr} style={styles.header} textStyle={styles.headerText} />
          </Table>
          <ScrollView style={styles.dataWrapper}>
            <Table borderStyle={{ borderWidth: 1, borderColor: 'black' }}>
              <TableWrapper style={{ flex: 1 }}>
                <Cols data={tableData} widthArr={widthArr} heightArr={[100, 100, 100, 100, 100, 100, 100, 100]} textStyle={styles.text} />
              </TableWrapper>
            </Table>
          </ScrollView>
        </View>
      </ScrollView>
    </>
  )
}
const styles = StyleSheet.create({
  dataWrapper: { marginTop: -1 },
  header: { height: 50, backgroundColor: 'black'},
  headerText: {fontSize: 16, textAlign: 'center', color: 'white'},
  text: { color: '#32a852', fontSize: 14},
  grayed: { color: '#6e6e6e', fontSize: 14},
  btn: { width: 58, height: 18, backgroundColor: '#32a852', borderRadius: 2 },
  btnText: { textAlign: 'center', color: 'black'},
  cell: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
})