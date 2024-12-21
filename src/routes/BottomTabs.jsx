
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import HomeFlow from './HomeFlow'
import SearchScreen from '../screens/SearchFlow/SearchScreen'
import { routes } from '../constants/routes'
import MarketScreen from '../screens/MarketsFlow/MarketScreen'
import Reels from '../screens/ReelsFlow/Reels'

const BottomTabs = () => {
    const BottomTabsNavigator = createBottomTabNavigator()
    return (
        <BottomTabsNavigator.Navigator>
            <BottomTabsNavigator.Screen name={routes.HOME_FLOW} component={HomeFlow} />
            <BottomTabsNavigator.Screen name={routes.SEARCH_FLOW} component={SearchScreen} />
            <BottomTabsNavigator.Screen name={routes.MARKETS_FLOW} component={MarketScreen} />
            <BottomTabsNavigator.Screen name={routes.REELS_FLOW} component={Reels} />

        </BottomTabsNavigator.Navigator>
    )
}

export default BottomTabs

const styles = StyleSheet.create({})