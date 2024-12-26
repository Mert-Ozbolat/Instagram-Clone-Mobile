import { StyleSheet, Text, View } from 'react-native'
import Header from '../../components/commons/Header'
import Avatar from '../../components/Avatar/Avatar'
import ProfileData from '../../components/ProfileFlow/ProfileData'



const source = "https://i.pinimg.com/1200x/f2/de/46/f2de4688f716ea3696bbec29441b1751.jpg"

const ProfileScreen = () => {

    return (
        <View>
            <Header screenName={'ProfileScreen'} isMyProfile={true} />
            <View style={styles.userProfileData}>
                <Avatar image={source} />

                <View style={styles.data}>
                    <ProfileData value={'1,234'} title={"Post"} />
                    <ProfileData value={'5,234'} title={"Followers"} />
                    <ProfileData value={'9,234'} title={"Following"} />
                </View>

            </View>

            <View style={styles.userNameAndInfo}>
                <Text style={styles.userName}>Username</Text>
                <Text style={styles.category}>Category/Genre text</Text>

                <Text style={styles.describtion}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, quae.</Text>
                <Text style={styles.link}>Link goes here</Text>
            </View>

        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    userProfileData: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        alignItems: 'center'
    },

    data: {
        flexDirection: 'row',
        gap: 24,
        color: '#000'
    },
    userNameAndInfo: {
        padding: 6,
        paddingHorizontal: 12,
        paddingBottom: 10
    },
    userName: {
        color: '#000',
        fontSize: 13,
        fontWeight: '700'
    },
    category: {
        fontSize: 13,
        fontWeight: '400',
        color: '#000'
    },
    describtion: {
        fontSize: 13,
        fontWeight: '400',
        lineHeight: 16,
        color: '#000'
    },
    link: {
        color: '#004c8b',
        fontWeight: '700',
        fontSize: 13,
        lineHeight: 16
    },
})