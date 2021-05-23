import { Button, Text } from 'native-base'
import React, { Component } from 'react'
import { View, StyleSheet} from 'react-native'

export default class NativeBase extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Button style={styles.button} rounded danger><Text> Danger </Text></Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50'
    },
   
})