import React, { Component } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
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
                <TitleConnexion />
                <ConnexionAccount navigation={this.props.navigation}/>
            </View>
        )
    }   
}

const TitleConnexion: React.FC = () => (    
    <View style={Styles.flexSecond}>
        <Text style={Styles.title}>REVEALIN</Text>  
        <Text style={Styles.subTitle}>Se connecter</Text>
        <View style={Styles.separator} />             
    </View>
)  

const ConnexionAccount: React.FC = () => (  
    <>            
        <View style={Styles.flexThird}>
            

            <Text style={Styles.label}>Adresse:</Text>
            <TextInput
                style={Styles.input}
                //   onChangeText={text => onChangeText(text)}
                //   value={value}
            />
            
            <Text style={Styles.label}>Mot de passe:</Text>
            <TextInput 
                style={Styles.input}
                //   onChangeText={text => onChangeText(text)}
                //   value={value}
                secureTextEntry={true}
            />
            
            <View style={Styles.separator} />
            
            <LinearGradient 
                colors={['#abe28e', '#e1f59a']} 
                style={Styles.linearGradientButton}>
                <Text 
                    style={Styles.buttonText} 
                    onPress={() => navigate('Register')}>
                    Valider
                </Text>                    
            </LinearGradient>   
        </View>
    </>
)
