import React, { Component } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Styles } from '../../styles/style';
import { NavigationStackProp } from 'react-navigation-stack';

type NavigateProp = {
    navigation: NavigationStackProp
};

/*
    CONNEXION || INSCRIPTION
*/
export class AuthenticationPage extends Component<NavigateProp> {
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
 
const TitleAuthentication: React.FC = () => (    
    <View style={Styles.flexSecond}>
        <Text style={Styles.title}>REVEALIN</Text>              
    </View>
)  

const ButtonConnect: React.FC<NavigateProp> = (props) => (      
    <View style={Styles.flexThird}>  
        <LinearGradient 
            colors={['#abe28e', '#e1f59a']} 
            style={Styles.linearGradientButton}>
            <Text 
                style={Styles.buttonText}  
                onPress={() => props.navigation.navigate('Connection')}>
                Se connecter
            </Text>
        </LinearGradient>
        <View style={Styles.separator} />
        <LinearGradient 
            colors={['#abe28e', '#e1f59a']} 
            style={Styles.linearGradientButton}>
            <Text 
                style={Styles.buttonText} 
                onPress={() => props.navigation.navigate('Register')}>
                S'incrire
            </Text>                    
        </LinearGradient>  
        <View style={Styles.separator} />
        {/* <LinearGradient colors={['#abe28e', '#e1f59a']} style={Styles.linearGradientIcon}>
            <Icon                        
                name="user-astronaut" size={20} color="#A6A6A6"
                onPress={() => console.log('hello')} />  
        </LinearGradient>                                       */}
    </View>
)  


