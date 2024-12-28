import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeFlow from './HomeFlow';
import SearchScreen from '../screens/SearchFlow/SearchScreen';
import { routes } from '../constants/routes';
import MarketsScreen from '../screens/MarketsFlow/MarketScreen';
import ReelsScreen from '../screens/ReelsFlow/ReelsSceen';
import ProfileScreen from '../screens/ProfileFlow/ProfileScreem';


const BottomTabs = () => {
    const BottomTabsNavigator = createBottomTabNavigator();
    const { HOME_FLOW, SEARCH_FLOW, MARKETS_FLOW, REELS_FLOW, PROFILE_FLOW } =
        routes;

    return (
        <BottomTabsNavigator.Navigator

            screenOptions={{
                headerShown: false
            }}>
            <BottomTabsNavigator.Screen name={HOME_FLOW} component={HomeFlow} />
            <BottomTabsNavigator.Screen name={SEARCH_FLOW} component={SearchScreen} />
            <BottomTabsNavigator.Screen name={REELS_FLOW} component={ReelsScreen} />
            <BottomTabsNavigator.Screen
                name={MARKETS_FLOW}
                component={MarketsScreen}
            />
            <BottomTabsNavigator.Screen
                name={PROFILE_FLOW}
                component={ProfileScreen}
            />
        </BottomTabsNavigator.Navigator>
    );
};

export default BottomTabs;
