import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default class CoreComponents extends Component {
  state={
    customerName : ''
  }

  getCustomerName(){
    console.log(this.state.customerName);
  }

    
   render() {
    return (
      <View>
        <Text style={{color: 'white', fontFamily: 'bold'}} style={style.title}> coreComponents </Text>
        <TextInput 
        placeholder="What is your age?"
        value={this.state.customerName}
        onChangeText={(value)=>{
            this.setState({
              customerName: value
            })
           
        }}
        />

        <Button 
        title="Print Me"
        onPress={()=>{
          this.getCustomerName();
        }}
        
        />
        
      </View>
    );
  }
}

const style = StyleSheet.create({
  title:{
    color: 'pink',
  },
  button:{
    color: 'white'
  }
})