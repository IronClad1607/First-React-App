import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const ComponentsScreen = () => {
    return (<View>
        <Text style={styles.textStyle}>Hi there!</Text>
        <Text>Hello</Text>
    </View>);
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
})

export default ComponentsScreen