import React, { Component } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import { getMe } from '../../core/http/userHttpService';

import config from '../../configs/config.json';
import { getItem } from '../../core/services/asyncStorageService';

type NavigateProp = {
    navigation: NavigationStackProp
};

export class AuthLoadingScreen extends Component<NavigateProp> {
    async componentDidMount() {
        getMe(
            ((response:any) => {
                this.props.navigation.navigate("Swipe");
            }),
            () => {this.props.navigation.navigate("Main")}
        )
    };

    render() {
        return (
            <View>
                <ActivityIndicator />
            </View>
        )
    }
}
