/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput} from 'react-native';
import Card from './components/Card.js';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: ['lion', 'tiger', 'giraffe'],
      inputvalue:'',
    }
  }
  render() {
    inputChange = (event) => {
      this.setState({inputvalue: event.target.value})
    }

    addButtonClick = () => {
      if (this.state.inputvalue !== "") {
        console.log(this.state.inputvalue)
        this.state.tasks.push(this.state.inputvalue);
        this.setState({ tasks: this.state.tasks })
      }
      else {
        alert("Write something in the input field!");
      }
    }
    return (
      <View >
        <TextInput placeholder="add the works..." onChangeText={(inputvalue) => this.setState({ inputvalue })} style={styles.container}/>
        <Button title="Add" onPress={addButtonClick}/>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        {this.state.tasks.map((taskname, i) => (<Card key={i} task={taskname}/>))} 

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop:50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
