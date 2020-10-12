import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

const ListScreen = () => {
    const friends = [
        { name: 'Ishaan' },
        { name: 'Sidhi' },
        { name: 'Satvik' },
        { name: 'Vishant' },
        { name: 'Sargam' },
        { name: 'JJ' },
        { name: 'Maddy' },
        { name: 'Vibhuti' },
    ]

    return (
        <FlatList
            data={friends}
            renderItem={({ item }) => {
                return <Text>{item.name}</Text>
            }}
        />
    )
}

const styles = StyleSheet.create({})


export default ListScreen