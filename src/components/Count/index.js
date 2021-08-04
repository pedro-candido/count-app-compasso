import React from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import { useSelector } from 'react-redux'

export const Count = () => {
    const { value } = useSelector(state => state.CounterReducer)

    return (
        <View style={styles.counterContainer}>
            <Text style={styles.count}>{value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    count: {
        color: '#fff',
        fontSize: 50,
        fontWeight: 'bold'
    },
    counterContainer: {
        position: 'absolute',
        bottom: Platform.OS === 'ios' ? 420 : 375
    }
})