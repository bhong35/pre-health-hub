import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import MainTabNavigator from './MainTabNavigator';
// import { createStackNavigator } from 'react-navigation-stack';
// import AuthLoadingScreen from '../screens/AuthLoadingScreen';

// const AppStack = createStackNavigator({ Home: HomeScreen, Other: OtherScreen });
// const AuthStack = createStackNavigator({ SignIn: SignInScreen });

export default createAppContainer(
    createSwitchNavigator(
        {
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
            Main: MainTabNavigator
        }
        // {
        //     // You could add another route here for authentication.
        //     // Read more at https://reactnavigation.org/docs/en/auth-flow.html
        //     Main: MainTabNavigator,
        //     AuthLoading: AuthLoadingScreen,
        //     App: AppStack,
        //     Auth: AuthStack
        // }
    )
);
