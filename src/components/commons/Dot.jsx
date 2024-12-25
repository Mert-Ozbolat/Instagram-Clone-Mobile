import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Dot = () => {
    return (
        <View style={styles.box} />
    )
}

export default Dot

const styles = StyleSheet.create({
    box: {
        width: 12,
        height: 12,
        borderRadius: 999,
        backgroundColor: 'red',
        borderWidth: 2,
        borderColor: 'white',
        position: 'absolute',
        left: 18,
        top: 2,
        zIndex: 1000
    }
})