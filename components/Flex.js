import { Button } from '.native-base'
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class Flex extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.view1}>

                </View>


                <View style={styles.view2}>

                </View>

                <View style={styles.view3}>
                    <View style={styles.view4}>

                    </View>
                    

                    <View style={styles.view5}>
                        
                    </View>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e74c3c'
    },
    view1: {
        flex: 1,
        backgroundColor: '#3498db'
    },
    view2: {
        flex: 1,
        backgroundColor: '#2c3e50'
    },
    view3: {
        flex: 1,
        backgroundColor: '#2ecc71'
    },
    view4: {
        flex: 1,
        backgroundColor: '#9b59b6'
    },
    view5: {
        flex: 1,
        backgroundColor: '#f39c12'
    }

})