import React, { Component } from 'react'
import {Button, Text} from 'native-base'
import {View, StyleSheet} from 'react-native'


export default class ScreenOne extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>screen One</Text>
                <Button rounded success style={styles.button}
                    onPress={()=>{
                        this.props.navigation.navigate('ScreenTwo')
                    }}
                > 
                    <Text> move screen two</Text>
                </Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#34495e'
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