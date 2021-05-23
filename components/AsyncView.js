import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import {Button, Content, Text} from 'native-base'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class AsyncView extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  storeData = async (value) => {
    try {
      await AsyncStorage.setItem('name', "danu")
      console.log("dataSaved")
    } catch (e) {
      // saving error
    }
  }


getData = async () => {
  try {
    const value = await AsyncStorage.getItem('name')
    console.log(value)
    if(value !== null) {
      // value previously stored
    }
  } catch(e) {
    // error reading value
  }
}

removeValue = async () => {
  try {
    await AsyncStorage.removeItem('name')
    console.log('remove.')
  } catch(e) {
    // remove error
  }

  
}


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}> AsyncStorage </Text>
        <Content style={styles.buttonContent}>
          <Button rounded success style={{marginBottom: 15}}
            onPress={this.storeData.bind(this)}
          >
              <Text>store data</Text>
          </Button>

          <Button rounded warning style={{marginBottom: 15}}
          onPress={this.getData.bind(this)}
          >
              <Text>fetch data</Text>
          </Button>

          <Button rounded danger
          onPress={this.removeValue.bind(this)}
          >
              <Text>reove data</Text>
          </Button>
        </Content>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#575fcf'
    },
    header: {
      color: 'white',
      textAlign: 'center',
      fontSize: 50,
      marginTop: 10
    },
    buttonContent: {
      position: 'absolute',
      top: '40%',
      left: '35%',
    },
})
