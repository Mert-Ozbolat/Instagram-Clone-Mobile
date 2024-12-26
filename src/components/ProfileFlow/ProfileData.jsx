import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Title, { titleTypes } from '../commons/Title'

const ProfileData = ({ value, title }) => {
    return (
        <View>
            <Title text={value} theme={titleTypes.TEXT_14_700} />
            <Title text={title} theme={titleTypes.TEXT_14_400} />
        </View>
    )
}

export default ProfileData

const styles = StyleSheet.create({})