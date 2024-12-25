import { StyleSheet, Text, View } from 'react-native'
import Header from '../../components/commons/Header'


const ProfileScreen = () => {
    return (
        <View>
            <Header screenName={'ProfileScreen'} isMyProfile={true} />
            <Text>ProfileScreen</Text>
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({})