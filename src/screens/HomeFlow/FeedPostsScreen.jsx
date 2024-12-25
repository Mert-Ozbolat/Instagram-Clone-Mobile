import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/commons/Header'
import { routes } from '../../constants/routes'

const FeedPostsScreen = () => {
    return (
        <View>
            <Header screenName={routes.FEED_POSTS_SCREEN} />
            <Text>FeedPostsScreen</Text>
        </View>
    )
}

export default FeedPostsScreen

const styles = StyleSheet.create({})