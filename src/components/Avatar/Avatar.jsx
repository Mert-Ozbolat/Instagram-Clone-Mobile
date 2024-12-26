import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { StoryRing } from './StoryRing'


const Avatar = ({ image }) => {


    return (
        <View style={styles.avatar}>
            <StoryRing />
            <Image style={styles.image} source={{ uri: image }} />
        </View>
    )
}

export default Avatar

const styles = StyleSheet.create({
    avatar: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 75,
        height: 75,
        borderRadius: 999,
        position: 'absolute'
    },
})