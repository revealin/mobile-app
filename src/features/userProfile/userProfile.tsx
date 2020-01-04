import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';

type NavigateProp = {
    navigation: NavigationStackProp
};

export class UserProfile extends Component<NavigateProp> {
    render() {
        return (
            <View>
                <Button
                    title="Modifier mon profil"
                    onPress={() => this.props.navigation.navigate("ModifyUserProfile")}
                />
            </View>
        )
    }
}
