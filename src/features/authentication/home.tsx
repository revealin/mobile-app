import React, { Component } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Styles } from '../../styles/style';
import Icon from 'react-native-vector-icons/FontAwesome5';

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
 
const TitleAuthentication: React.FC = () => (    
    <View style={Styles.sectionContainer}>
        <Text style={Styles.title}>RevealIn</Text>              
    </View>
)  

const ButtonConnect: React.FC = () => (  
    <View style={{flex: 3, marginLeft: 30, marginRight: 30, marginBottom: 100}}>                    
        <LinearGradient 
            colors={['#abe28e', '#e1f59a']} 
            style={Styles.linearGradientButton}>
            <Text 
                style={Styles.buttonText}  
                onPress={() => Alert.alert('Connecter.')}>
                Se connecter
            </Text>
        </LinearGradient>
        <View style={Styles.separator} />
        <LinearGradient 
            colors={['#abe28e', '#e1f59a']} 
            style={Styles.linearGradientButton}>
            <Text 
                style={Styles.buttonText} 
                onPress={() => Alert.alert('Je me suis inscris/.')}>
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


