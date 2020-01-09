import React, { Component } from 'react';
import { View, Text, TextInput, StyleProp, TextStyle, ActivityIndicator} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Styles } from '../../styles/style';
import { NavigationStackProp } from 'react-navigation-stack';
import { colors } from 'react-native-elements';
import Spinner from 'react-native-loading-spinner-overlay';

import { connection } from '../../core/http/authenticationHttpService';

type NavigateProp = {
    navigation: NavigationStackProp,
};

type Connection = {
    connection: Function
};

/*
    CONNEXION
*/
export class ConnexionAccountPage extends Component<NavigateProp> {
    state = {
        spinner: false
    };

    connection = async(
        mail: {value: string, error: string},
        password: {value: string, error: string}
    ) => {
        this.setState({
            spinner: true
        });

        // Check errors
       if (mail.error !== '' || password.error !== '') {
            return
        } else {
            connection(mail.value, password.value, () => {
                this.setState({
                    spinner: false
                });
                this.props.navigation.navigate("Swipe");
            })
        }
    }

    render() {
        return (
            <View style={Styles.body}>
                <Spinner
                    visible={this.state.spinner}
                    textContent={'Chargement...'}
                    overlayColor={"rgba(0, 0, 0 , 0.60)"}
                    textStyle={{color: "white"}}
                />
                <TitleConnexion />
                <ConnectionAccount
                    navigation={this.props.navigation}
                    connection={this.connection}
                />
            </View>
        )
    }
};

const TitleConnexion: React.FC = () => (
    <View style={Styles.flexSecond}>
        <Text style={Styles.title}>REVEALIN</Text>
        <Text style={Styles.subTitle}>Se connecter</Text>
        <View style={Styles.separator} />
    </View>
);

class ConnectionAccount extends Component<NavigateProp & Connection> {
    state= {
        mail: {
            value: '',
            error: ''
        },
        password: {
            value: '',
            error: ''
        }
    };

    mailCheckHandler = (mail: string) => {
        const regMail = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if (!regMail.test(mail)) {
            this.setState({
                mail: {
                    value: mail,
                    error: "Le mail spécifié n'est pas correct"
                }
            })
        } else {
            this.setState({
                mail: {
                    value: mail,
                    error: ""
                }
            })
        }
    };

    passwordCheckHandler = (password: string) => {
        if (password.length <= 8) {
            this.setState({
                password: {
                    value: password,
                    error: "Le mot de passe doit comporter plus de 8 caractères"
                }
            })
        } else {
            this.setState({
                password: {
                    value: password,
                    error: ""
                }
            })
        }
    };

    errorStyleHandler = (field: "mail" | "password"): StyleProp<TextStyle> => {
        if (this.state[field].error !== '') {
            return {
                height: 40, 
                borderColor: colors.error, 
                borderWidth: 1
            };
        } else {
            return {
                height: 40, 
                borderColor: '#abe28e', 
                borderWidth: 1
            };
        }
    };

    render() {
        return (
            <View style={Styles.flexThird}>
                <Text style={Styles.label}>Adresse:</Text>
                <Text>{this.state.mail.error}</Text>
                <TextInput
                    onChangeText={(mail: string) => this.mailCheckHandler(mail)}
                    style={this.errorStyleHandler("mail")}
                />

                <Text style={Styles.label}>Mot de passe:</Text>
                <Text>{this.state.password.error}</Text>
                <TextInput 
                    onChangeText={(password: string) => this.passwordCheckHandler(password)}
                    style={this.errorStyleHandler("password")}
                    secureTextEntry={true}
                />
                <View style={Styles.separator} />
        
                <LinearGradient 
                    colors={['#abe28e', '#e1f59a']} 
                    style={Styles.linearGradientButton}>
                    <Text 
                        style={Styles.buttonText} 
                        onPress={() => this.props.connection(this.state.mail, this.state.password)}>
                        Valider
                    </Text>                    
                </LinearGradient>
                <View>
                    <Text>
                        Vous n'avez pas de compte ?
                    </Text>
                    <Text
                        style={Styles.switchLink}
                        onPress={() => this.props.navigation.navigate("Register")}
                    >
                        Inscrivez-vous
                    </Text>
                </View>
            </View>
        )
    }
};
