import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Components
import { PageAuthentication } from '../features/authentication/authentication';
import { ModifyUserProfile } from '../features/userProfile/modifyUserProfile'; 

const MainRouter = createStackNavigator(
    {
        Main: PageAuthentication,
        ModifyUserProfile: ModifyUserProfile

    },
    {
        initialRouteName: "ModifyUserProfile"
    }
)

export default createAppContainer(MainRouter)