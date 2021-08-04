import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Platform, Alert } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { subtractValue, sumValue } from '../../reducers/Counter.reducer'


export const ButtonWrapper = () => {
    const { value } = useSelector(state => state.CounterReducer)
    const dispatch = useDispatch()

    const handleSum = () => {
        if(value < 10) dispatch(sumValue())
        else Alert.alert('Ops','Valor 10 alcançado')
    }
    const handleSubtract = () => {
        if(value !== 0) dispatch(subtractValue())
        else Alert.alert('Opa', 'Valor zerado')
    }

    return (
        <View style={styles.buttonWrapper}>
            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.button}
                onPress={handleSum}
            >
                <Text style={styles.countText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.button}
                onPress={handleSubtract}
            >
                <Text style={styles.countText}>-</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    footerContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '70%',
        alignItems: 'center',
        position: 'absolute',
        bottom: 70
    },
    countText: {
        color: '#fff',
        fontSize: 40
    },
    buttonWrapper: {
        display: 'flex',
        flexDirection: 'row',
        width: 180,
        justifyContent: 'space-between',
        position: 'absolute',
        bottom:  Platform.OS === 'ios' ? 270 : 240
    },
    button: {
        backgroundColor: '#f7b718',
        borderRadius: 20,
        width: 80,
        height: 80,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    }
})

