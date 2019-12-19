import React, { Component } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { Styles } from '../../styles/style';

/*
    CONNEXION || INSCRIPTION
*/
export class AuthenticationPage extends Component {
    render() {
        return (            
            <View style={Styles.body}>
                <TitleAuthentication />
                <ButtonConnect />
            </View>
        )
    }   
}
 
class TitleAuthentication extends Component {
    render() {
        return (
            <View style={Styles.sectionContainer}>
                <Text style={Styles.title}>Reveal In</Text>              
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
                <View style={Styles.separator} />
                    <Button
                        title="S'inscrire"
                        onPress={() => Alert.alert('incription')}
                    />
                </View>
            </>
        )        
    }  
}


