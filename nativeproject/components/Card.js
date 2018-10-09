
import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
export default class Card extends Component {
    render() {
      return (
        <View >
          <Text style={styles.cardtext}>

            {this.props.task}
                     

          </Text>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    cardtext: {
      width: '90%',
      height: 20,
      color:'#D3E6F2',
      shadowColor: 'grey',
      borderColor:'#D3E6F2',
    }
  });
  