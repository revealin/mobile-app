import React, { Component } from 'react';
import { View, Text, Button, Alert, ToastAndroid, TouchableHighlight, Image } from 'react-native';
import { AuthenticationStyles, TriangleCorner } from '../../styles/authentication/style'

export class PageAuthentication extends Component {
    render() {
        return (            
            <View style={AuthenticationStyles.body}>
                <TitleAuthentication />
                <ButtonConnect />
            </View>
        )
    }   
}
 
class TitleAuthentication extends Component {
    render() {
        return (
            <View style={AuthenticationStyles.sectionContainer}>
                <Text style={AuthenticationStyles.title}>Reveal In</Text>              
            </View>
        )        
    }  
}

class ButtonConnect extends Component {
    render() {
        return (
            <>          
                <View style={{flex: 3, marginLeft: 30, marginRight: 30, marginBottom: 100}}>
                    <Button
                        title="Se connecter"
                        onPress={() => Alert.alert('connect')}
                    />
                <View style={AuthenticationStyles.separator} />
                    <Button
                        title="S'inscrire"
                        onPress={() => Alert.alert('incription')}
                    />
                </View>
            </>
        )        
    }  
}

 