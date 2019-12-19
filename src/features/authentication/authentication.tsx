import React, { Component } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { AuthenticationStyles, TriangleCorner } from '../../styles/authentication/style'
import { Styles } from '../../styles/style';

// Home page for new user
// He has choice for connect or create his account
export class PageAuthentication extends Component {
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

// End Home Page 

// Page Connexion
// He can connect with his account
export class PageAccount extends Component {
    render() {
        return (            
            <View style={Styles.body}>
                <ConnexionAccount />
            </View>
        )
    }   
}

export class ConnexionAccount extends Component {
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
            </View>
            </>
        )
    } 
}

// Create account
// He can create his account
export class PageCreateAccount extends Component {
    render() {
        return (            
            <View style={Styles.body}>
                <CreateAccount />
            </View>
        )
    }   
}

export class CreateAccount extends Component {
    render() {
        return (             
            <>
            <View style={Styles.sectionContainer}>
                <Text style={Styles.title}>Créer un compte</Text>              
            </View>
            <View style={{flex: 3, marginLeft: 30, marginRight: 30, marginBottom: 100}}>
                <Text style={Styles.content}>Adresse e-mail:</Text>
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
                <Text style={Styles.content}>Confirmation du mot de passe:</Text>
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
            </View>
            </>
        )
    } 
}

 