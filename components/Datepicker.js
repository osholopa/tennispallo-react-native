import React, { useState } from 'react'
import {  Button, } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'

export default function Datepicker(props) {
  const {date, setDate} = props

  const [show, setShow] = useState(false)

  const showDatepicker = () => {
    setShow(true)
  }

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate)
    console.log(currentDate.toLocaleDateString('fi-FI'))
  }

  return (
    <>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={date}
          mode={'date'}
          is24Hour={true}
          display="spinner"
          onChange={onChange}
        />
      )}
      <Button color={'#32a852'} title={date.toLocaleDateString('fi-FI')} onPress={showDatepicker}></Button>
    </>
  )
}