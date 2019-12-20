import React, { Component } from 'react';
import { View, Text, TextInput, Button, Alert, CheckBox, Switch } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import { Styles } from '../../styles/style';

/*
    CONNEXION
*/
export class ConnexionAccountPage extends Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (            
            <View style={Styles.body}>
                <ConnexionAccount navigation={this.props.navigation}/>
            </View>
        )
    }   
}

class ConnexionAccount extends Component {
    render() {
        return (             
            <>
            <View style={Styles.sectionContainer}>
                <Text style={Styles.title}>Se connecter</Text>              
            </View>
            <View style={{flex: 3, marginLeft: 30, marginRight: 30, marginBottom: 100}}>
                <Text style={Styles.content}>Adresse:</Text>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    //   onChangeText={text => onChangeText(text)}
                    //   value={value}
                />
                <Text style={Styles.content}>Mot de passe:</Text>
                <TextInput 
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    //   onChangeText={text => onChangeText(text)}
                    //   value={value}
                    secureTextEntry={true}
                />
                
                <View style={Styles.separator} />
                
                <Button
                    title="Valider"
                    onPress={() => Alert.alert('Left button pressed')}
                />    
                <Text
                    onPress={() => this.props.navigation.navigate("Register")}
                    style={Styles.switchLink}
                >
                    Créer un compte
                </Text>
            </View>
            </>
        )
    } 
}