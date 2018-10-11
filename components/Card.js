
import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
export default class Card extends Component {
    render() {
      return (
        <View style={styles.cardtext} >
            <Text >

            {this.props.task}
                     

          </Text>
          
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
   
    cardtext: {
      width: '90%',
      height: 20,
      color: '#856858',
      borderColor:'#856858',
    }
  });
  