import {createStackNavigator} from '@react-navigation/stack'
import { ChatDetailsScreen, ChatViewScreen, LoginScreen, SplashScreen, SignUpScreen } from '../screens';
import { screenHeaders } from '../constants/screenHeaders';
import TabNavigator from './tabNavigator';
import { NavigationContainer } from '@react-navigation/native';

const SplashStack = createStackNavigator();

function StackNavigator () {
    return (
        <SplashStack.Navigator screenOptions={{headerBackTitle: false}}>
            <SplashStack.Screen
                name={screenHeaders.splashScreen}
                component={SplashScreen}
                options={{headerShown: false}}
            />
            <SplashStack.Screen
                name={screenHeaders.loginScreen}
                component={LoginScreen}
            />
            <SplashStack.Screen
                name='safaf'
                component={TabNavigator}
                options={{headerShown: false}}
            />
            <SplashStack.Screen
                name={screenHeaders.chatViewScreen}
                component={ChatViewScreen}
            />
            <SplashStack.Screen
                name={screenHeaders.chatDetailsScreen}
                component={ChatDetailsScreen}
            />
            <SplashStack.Screen
                name={screenHeaders.signUpScreen}
                component={SignUpScreen}
            />
        </SplashStack.Navigator>
    )
}

export {
    StackNavigator};