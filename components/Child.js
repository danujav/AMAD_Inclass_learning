import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class  extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={style.container}>
        <Text> How are you {this.props.name}...? </Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#9b59b6'
    }
})