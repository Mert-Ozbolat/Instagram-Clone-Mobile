import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { routes } from '../constants/routes';
import AuthFlow from './AuthFlow';
import BottomTabs from './BottomTabs';

const RootNavigator = () => {
    const RootNavigatorStack = createNativeStackNavigator();
    const { AUTH_FLOW, MAIN_FLOW } = routes;

    const [token, setToken] = useState(true);

    return (
        <RootNavigatorStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName={AUTH_FLOW}>
            {token ? (
                <RootNavigatorStack.Screen name={MAIN_FLOW} component={BottomTabs} />
            ) : (
                <RootNavigatorStack.Screen name={AUTH_FLOW} component={AuthFlow} />
            )}
        </RootNavigatorStack.Navigator>
    );
};

export default RootNavigator;