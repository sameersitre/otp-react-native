import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (

      <View style={styles.container}>
        <Text style={styles.textcontainer}> start working on your !</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color:'green', 
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textcontainer: {
  color:'green',
  },
});
