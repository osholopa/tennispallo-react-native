import React from 'react'

const baseUrl = 'http://dev.api.northly.fi/reservations'

export function getEvents(dateObj) {
  const dateString = dateObj.toISOString().split('T')[0]
  const url = `${baseUrl}?date=${dateString}&type=tennis`
  let data = fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data
    })
    .catch((error) => {
      console.log(error)
  })
  return data
}

export function reserveEvent(id) {
  const userId = 'ReactNativeApp'
  const url = `${baseUrl}?eventId=${id}&userId=${userId}`
  let promise = fetch(url, {
    method: "POST",
    body: JSON.stringify({
      userId: userId 
    }),
    headers: { 
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json()) 
  .then(json => {return json})
  return promise
}