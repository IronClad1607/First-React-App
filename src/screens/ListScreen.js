import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

const ListScreen = () => {
    const friends = [
        { name: 'Ishaan', key: '1' },
        { name: 'Sidhi', key: '2' },
        { name: 'Satvik', key: '3' },
        { name: 'Vishant', key: '4' },
        { name: 'Sargam', key: '5' },
        { name: 'JJ', key: '6' },
        { name: 'Maddy', key: '7' },
        { name: 'Vibhuti', key: '8' },
    ]

    return (
        <FlatList
            data={friends}
            renderItem={({ item }) => {
                return <Text style={styles.heading}>{item.name}</Text>
            }}
        />
    )
}

const styles = StyleSheet.create({
    heading:{
        fontSize:15
    }
})


export default ListScreen