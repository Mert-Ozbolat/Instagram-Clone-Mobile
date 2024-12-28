import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Avatar from '../Avatar/Avatar';
import { storyList } from '../../constants/dummyData';

const SavedIGStories = ({

}) => {
    return (
        <View style={styles.savedIGStories}>
            <FlatList
                ItemSeparatorComponent={
                    <View
                        style={{
                            width: 18,
                        }}
                    />
                }
                showsHorizontalScrollIndicator={false}
                data={storyList}
                renderItem={({ item, index }) => (
                    <View
                        key={index}
                        style={styles.box}>
                        <Avatar image={item.storyImg} isSaved={true} />
                        <Text>{item.storyDesc}</Text>
                    </View>
                )}
                horizontal
            />
        </View>
    );
};

export default SavedIGStories;

const styles = StyleSheet.create({
    savedIGStories: {
        paddingHorizontal: 9,
        paddingVertical: 4,
    },
    storyText: {
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 14,
        letterSpacing: -0.4,
    },
    box: {
        alignItems: 'center',
        justifyContent: 'center',
    }
});