import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Frame6 } from '../../assets/icons'
import { colors } from '../../constants/colors'

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
        backgroundColor: colors.GRAY,
        padding: 7,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 0.5,
        borderColor: colors.BLACK,
        borderRadius: 3,

    }
})