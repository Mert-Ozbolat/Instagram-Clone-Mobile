import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FeedPostsScreen from '../screens/HomeFlow/FeedPostsScreen';
import ProfileScreen from '../screens/ProfileFlow/ProfileScreem';
import { routes } from '../constants/routes';

const HomeFlow = () => {
    const HomeFlowStack = createNativeStackNavigator();
    const { PROFILE_SCREEN, FEED_POSTS_SCREEN } = routes;
    return (
        <HomeFlowStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName={PROFILE_SCREEN}>
            <HomeFlowStack.Screen
                name={FEED_POSTS_SCREEN}
                component={FeedPostsScreen}
            />
            <HomeFlowStack.Screen name={PROFILE_SCREEN} component={ProfileScreen} />
        </HomeFlowStack.Navigator>
    );
};

export default HomeFlow;