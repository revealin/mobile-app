import React, { Component } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { Styles } from '../../styles/style';

/*
    CONNEXION || INSCRIPTION
*/
export class AuthenticationPage extends Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <View style={Styles.body}>
                <TitleAuthentication />
                <ButtonConnect navigation={this.props.navigation}/>
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
                <View style={{flex: 3, marginLeft: 30, marginRight: 30, marginBottom: 100}}>
                    <Button
                        title="Se connecter"
                        onPress={() => this.props.navigation.navigate('Connection')}
                    />
                    <View style={Styles.separator} />
                    <Button
                        title="S'inscrire"
                        onPress={() => this.props.navigation.navigate('Register')}
                    />
                </View>
        )        
    }  
}


