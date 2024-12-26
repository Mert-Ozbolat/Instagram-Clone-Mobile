import { StyleSheet, Text, View } from 'react-native'
import Header from '../../components/commons/Header'
import Avatar from '../../components/Avatar/Avatar'



const source = "https://i.pinimg.com/1200x/8d/65/3b/8d653b3ec2fa7d47ba5f0cae9b71107a.jpg"

const ProfileScreen = () => {

    return (
        <View>
            <Header screenName={'ProfileScreen'} isMyProfile={true} />
            <View>
                <Avatar image={source} />
            </View>
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({})