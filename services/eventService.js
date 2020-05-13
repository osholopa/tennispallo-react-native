import React from 'react'

const baseUrl = 'http://dev.api.northly.fi/reservations'

const getEvents = type => {
  const today = new Date().toISOString().split('T')[0]
  const url = `${baseUrl}?date=${today}&type=${type}`
  fetch(url)
  .then((response) => response.json())
  .then((data) => {
    return data
  })
  .catch((error) => {
    Alert.alert('Error', error);
  })
}

export default { getEvents }