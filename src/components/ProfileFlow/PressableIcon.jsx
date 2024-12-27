import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Frame6 } from '../../assets/icons'
import { color } from '../../constants/color'


const PressableIcon = () => {
    return (
        <TouchableOpacity style={styles.box}>
            <Frame6 />
        </TouchableOpacity>
    )
}

export default PressableIcon

const styles = StyleSheet.create({
    box: {
        backgroundColor: color.GRAY,
        padding: 7,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: color.BLACK,
        borderRadius: 3
    }
})