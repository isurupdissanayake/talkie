import { DirectChatScreen, GroupChatScreen, LoginScreen, ProfileScreen, SplashScreen } from '../screens';
import { screenHeaders } from '../constants/screenHeaders';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function TabNavigator () {
    return (
        <Tab.Navigator initialRouteName={screenHeaders.groupChatScreen}>
            <Tab.Screen 
                name={screenHeaders.groupChatScreen}
                component={GroupChatScreen}
            />
            <Tab.Screen 
                name={screenHeaders.directChatScreen}
                component={DirectChatScreen}
            />
            <Tab.Screen
                name={screenHeaders.profileScreen}
                component={ProfileScreen}
            />
        </Tab.Navigator>
    )
}

export default TabNavigator;