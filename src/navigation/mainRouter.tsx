import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Styles } from '../styles/style';
import { View, Text } from 'react-native';
import { fromRight } from 'react-navigation-transitions';

// Components
import { AuthenticationPage } from '../features/authentication/home';
import { ConnexionAccountPage } from '../features/authentication/connexion';
import { CreateAccountPage } from '../features/authentication/inscription';
import { ModifyUserProfile } from '../features/userProfile/modifyUserProfile'; 
import { SwipePage } from '../features/swipe/swipe';
import { MatchPage } from '../features/chat/match';
import { UserProfile } from '../features/userProfile/userProfile';
import { ChatPage } from '../features/chat/chat';

import { HeaderIcon } from './headerIcon';

const MainRouter = createStackNavigator(
    {
        Main: {
            screen: AuthenticationPage,
            navigationOptions: {
                header: null
            }
        },
        Connection: {
            screen: ConnexionAccountPage,
            navigationOptions: {
                header: null
            }
        },
        Register: {
            screen: CreateAccountPage,
            navigationOptions: {
                header: null
            }
        },
        Swipe: {
            screen: SwipePage,
            navigationOptions: ({ navigation }) => ({
                headerLeftContainerStyle: Styles.headerLeft,
                headerRightContainerStyle: Styles.headerRight,
                headerLeft: () => (
                    <HeaderIcon 
                        iconName="list-box"
                        navigation={navigation}
                        pageLink="MatchPage"
                    />
                ),
                headerTitleStyle: Styles.headerMid,
                headerTitle: "Swipes",
                headerRight: () => (
                    <HeaderIcon
                        iconName="contact"
                        navigation={navigation}
                        pageLink="UserProfile"
                    />
                ),
            }),
        },
        MatchPage: {
            screen: MatchPage,
            navigationOptions: ({ navigation }) => ({
                headerLeftContainerStyle: Styles.headerLeft,
                headerRightContainerStyle: Styles.headerRight,
                headerLeft: () => (
                    <HeaderIcon 
                        iconName="switch"
                        navigation={navigation}
                        pageLink="Swipe"
                    />
                ),
                headerTitleStyle: Styles.headerMid,
                headerTitle: "Matchs",
                headerRight: () => (
                    <HeaderIcon
                        iconName="contact"
                        navigation={navigation}
                        pageLink="UserProfile"
                    />
                ),
            })
        }, 
        UserProfile: {
            screen: UserProfile,
            navigationOptions: ({ navigation }) => ({
                headerBackTitle: "Profil",
                headerLeftContainerStyle: Styles.headerLeft,
                headerRightContainerStyle: Styles.headerRight,
                headerLeft: () => (
                    <HeaderIcon 
                        iconName="switch"
                        navigation={navigation}
                        pageLink="Swipe"
                    />
                ),
                headerTitleStyle: Styles.headerMid,
                headerRight: () => (
                    <HeaderIcon
                        iconName="list-box"
                        navigation={navigation}
                        pageLink="MatchPage"
                    />
                ),
            })
        },
        ModifyUserProfile: {
            screen: ModifyUserProfile,
            navigationOptions: ({ navigation }) => ({
                headerLeftContainerStyle: Styles.headerLeft,
                headerLeft: () => (
                    <View style={Styles.headerBack}>
                        <HeaderIcon 
                            iconName="arrow-round-back"
                            navigation={navigation}
                            pageLink="UserProfile"
                        />
                        <Text style={Styles.headerBackTitleStyle}>
                            Profil
                        </Text>
                    </View>
                ),
            }),
        },
        ChatPage: {
            screen: ChatPage,
            navigationOptions: ({ navigation }) => ({
                headerLeftContainerStyle: Styles.headerLeft,
                headerLeft: () => (
                    <View style={Styles.headerBack}>
                        <HeaderIcon
                            iconName="arrow-round-back"
                            navigation={navigation}
                            pageLink="MatchPage"
                        />
                        <Text style={Styles.headerBackTitleStyle}>
                            Matchs
                        </Text>
                    </View>
                ),
            }),
        }
    },
    {
        initialRouteName: "ChatPage",
        transitionConfig: () => fromRight(),
    }
);

export default createAppContainer(MainRouter)

