import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const ComponentsScreen = () => {
    const greeting = 'Bye there!'
    const jsxVariable = <Text>I am IronClad</Text>


    return (<View>
        <Text style={styles.textStyle}>{greeting}</Text>
        <Text>Hi there</Text>
        {jsxVariable}
    </View>)
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
})

export default ComponentsScreen