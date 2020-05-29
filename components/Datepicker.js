import React, { useState } from 'react'
import {  Button, View } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'

export default function Datepicker(props) {
  const {date, setDate} = props

  const [show, setShow] = useState(false)

  const showDatepicker = () => {
    setShow(true)
  }

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate)
    console.log(`Date changed to ${currentDate.toLocaleDateString('fi-FI')}`)
  }

  return (
    <View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={date}
          mode={'date'}
          is24Hour={true}
          display="spinner"
          onChange={onChange}
          style={{width: '100%', backgroundColor: 'white'}}
        />
      )}
      <Button color={'#32a852'} title={date.toLocaleDateString('fi-FI')} onPress={showDatepicker}></Button>
    </View>
  )
}