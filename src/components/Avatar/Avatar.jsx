import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { StoryRing } from './StoryRing';
import { StoryRing2 } from '../../assets/icons';

const Avatar = ({ image, isSaved }) => {
    return (
        <View style={styles.avatar}>
            {isSaved ? <StoryRing2 /> : <StoryRing />}

            <Image
                style={[styles.image, isSaved && styles.isSavedSize]}
                source={{
                    uri: image,
                }}
            />
        </View>
    );
};

export default Avatar;

const styles = StyleSheet.create({
    avatar: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 75,
        height: 75,
        borderRadius: 9999,

        position: 'absolute',
    },
    isSavedSize: {
        width: 55,
        height: 55,
    },
});