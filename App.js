/* import 'react-native-gesture-handler'; */
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Flex from './components/Flex'
import NativeBase from './components/NativeBase'    
import Parent from './components/Parent'
import ScreenOne from './components/ScreenOne'
import ScreenTwo from './components/ScreenTwo'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncView from './components/AsyncView'

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <AsyncView/>
    )
  }
}
