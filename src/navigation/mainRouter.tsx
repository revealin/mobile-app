import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Components
import { AuthenticationPage } from '../features/authentication/home';
import { ConnexionAccountPage } from '../features/authentication/connexion';
import { CreateAccountPage } from '../features/authentication/inscription';

import { ModifyUserProfile } from '../features/userProfile/modifyUserProfile'; 

const MainRouter = createStackNavigator(
    {
        Main: AuthenticationPage,
        Connection: ConnexionAccountPage,
        Register: CreateAccountPage,
        ModifyUserProfile: ModifyUserProfile
    },
    {
        initialRouteName: "Main"
    }
)

export default createAppContainer(MainRouter)