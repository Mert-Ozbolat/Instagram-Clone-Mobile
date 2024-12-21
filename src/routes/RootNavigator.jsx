import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { routes } from "../constants/routes"
import AuthFlow from "./AuthFlow"
import BottomTabs from "./BottomTabs"


const RootNavigator = () => {
    const RootNavigatorStack = createNativeStackNavigator()
    const { AUTH_FLOW, MAIN_FLOW } = routes
    return (
        <RootNavigatorStack.Navigator>
            <RootNavigatorStack.Screen name={AUTH_FLOW} component={AuthFlow} />
            <RootNavigatorStack.Screen name={MAIN_FLOW} component={BottomTabs} />
        </RootNavigatorStack.Navigator>
    )
}

export default RootNavigator

