// ! ----- Original functioning ----- !
import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import MainTabNavigator from './MainTabNavigator';

export default createAppContainer(
    createSwitchNavigator(
        {
            Main: MainTabNavigator
        },
    )
);

// * ----- attempting animation ----- *
// import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
// import { Transition } from 'react-native-reanimated';

// * ----- attempting auth ----- *
// import { createStackNavigator } from 'react-navigation-stack';
// import AuthLoadingScreen from '../screens/AuthLoadingScreen';
// const AppStack = createStackNavigator({ Home: HomeScreen, Other: OtherScreen });
// const AuthStack = createStackNavigator({ SignIn: SignInScreen });

// * ----- attempting animation ----- *
// export default createAppContainer(
//     createAnimatedSwitchNavigator(
//         {
//             Main: MainTabNavigator
//         },
//         {
//             transition: (
//                 <Transition.Together>
//                     <Transition.Out
//                     type="slide-bottom"
//                     durationMs={400}
//                     interpolation="easeIn"
//                     />
//                     <Transition.In type="fade" durationMs={500} />
//                 </Transition.Together>
//             )
//         }
//     )
// );

// * ----- Auth attempt ----- *
//         {
//                 // You could add another route here for authentication.
//                 // Read more at https://reactnavigation.org/docs/en/auth-flow.html
//             Main: MainTabNavigator,
//             AuthLoading: AuthLoadingScreen,
//             App: AppStack,
//             Auth: AuthStack
//         }
//     )
// );
            