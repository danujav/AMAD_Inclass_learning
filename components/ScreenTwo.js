import { Container, Content, Button, Text } from 'native-base'
import React, { Component } from 'react'
import {View, StyleSheet} from 'react-native'

export default class ScreenTwo extends Component {
    render() {
        return (
           <View style={styles.container}>
               <Text style={styles.text}>Screen Two</Text>
               <Button rounded success style={styles.button}
                    onPress={()=>{
                        this.props.navigation.navigate('ScreenOne')
                    }}
               > 
                    <Text>move screen one</Text>
                </Button>
           </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db'
    },
    text: {
        color: 'white',
        fontSize: 50,
        textAlign: 'center',
        marginTop: 20
    },
    button: {
        alignContent: 'center',
        alignItems: 'center',
        marginLeft: 25,
        position: 'absolute',
        top: '50%',
        left: '25%'
    }
})