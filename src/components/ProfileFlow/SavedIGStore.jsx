import { FlatList, StyleSheet, Text, View } from 'react-native'
import Avatar from '../Avatar/Avatar'
import { color } from '../../constants/color'
import { storyList } from '../../constants/dummyData'

const SavedIGStore = () => {

    return (
        <View style={styles.SavedIGStore}>
            <FlatList
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={<View style={{ width: 18 }} />}
                data={storyList}
                renderItem={({ item, index }) => (
                    <View
                        key={index}
                        style={styles.box}>
                        <Avatar image={item.storyImg} isSaved={true} />
                        <Text style={styles.storyText}>{item.storyDesc}</Text>
                    </View>

                )}
                horizontal={true}
            />

        </View>
    )
}

export default SavedIGStore

const styles = StyleSheet.create({
    SavedIGStore: {
        paddingHorizontal: 9,
        paddingVertical: 4
    },
    storyText: {
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 14,
        letterSpacing: -0.4,
        color: color.BLACK
    },
    box: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        gap: 10
    }
})