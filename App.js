import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { AntDesign } from '@expo/vector-icons'

import ReservationScreen from './components/ReservationScreen'
import UserPage from './components/UserPage'
import InfoPage from './components/InfoPage'

export default function App() {

  const Stack = createStackNavigator()

  const NavigationBar = () => {
    return (
      <View style={styles.navigationBar}>
        <AntDesign onPress={() => navigationRef.current?.navigate("Infosivu")} name="infocirlceo" size={24} color="white" />
        <Text style={styles.navigationHeader}>Varauskalenteri</Text>
        <AntDesign onPress={() => navigationRef.current?.navigate("Käyttäjäsivu")} name="user" size={24} color="white" />
      </View>
    )
  }

  const navigationRef = React.createRef()

  return (
    <NavigationContainer ref={navigationRef} style={styles.container}>
      <Stack.Navigator initialRouteName="ReservationScreen">
        <Stack.Screen name="Varauskalenteri"
          component={ReservationScreen}
          options={{
            headerStyle: {
              backgroundColor: 'black',
            }, headerTitle: (navigationRef) => <NavigationBar />
          }}
        />
        <Stack.Screen name="Käyttäjäsivu" component={UserPage}
          options={{
            headerStyle: {
              backgroundColor: 'black',
            }, headerTintColor: '#fff'
          }} />
          <Stack.Screen name="Infosivu" component={InfoPage}
          options={{
            headerStyle: {
              backgroundColor: 'black',
            }, headerTintColor: '#fff'
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  navigationBar: {
    height: 100,
    backgroundColor: 'black',
    flexDirection: 'row',
    height: 30,
    justifyContent: 'space-between',
  },
  navigationHeader: {
    color: 'white',
    fontSize: 24
  }
})