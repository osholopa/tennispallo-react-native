import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { firebase } from "./auth/Firebase";

export default function UserPage({ navigation }) {

  const user = firebase.auth().currentUser;

  const logout = () => {
    console.log(`Logging out uid ${user.uid}`);
    firebase.auth().signOut();
    navigation.navigate("Kirjautumissivu");
  };

  return (
    <View style={styles.container}>
      <Text style={{flex:1, color: "white", fontSize: 24 }}>
        Hei, {user.displayName}{'\n'}{'\n'}
        Your email: {user.email}{'\n'}{'\n'}
        Your userID: {user.uid}
      </Text>
      <Button title="Kirjaudu ulos" onPress={() => logout()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: "black",
  },
});
