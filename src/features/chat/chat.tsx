import React, { Component } from 'react';
import { View, Text, TextInput, Button, Alert, CheckBox, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ButtonGroup } from 'react-native-elements';
import { Styles } from '../../styles/style';
import { Colors } from 'react-native/Libraries/NewAppScreen';

/*
    CREATE ACCOUNT
*/
export class ChatPage extends Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (            
            <View style={Styles.body}>
                <Text style={Styles.chatTitle}>Nom de la femme</Text>
                <Chat />
            </View>
        )
    }   
}

const TitleAuthentication: React.FC = () => (    
    <View style={Styles.flexSecond}>
        
    </View>
)  

const Chat: React.FC = () => (    
    <View style={Styles.flexThird}>
        {/* Si c'est ton message */}
        <LinearGradient 
            colors={['#abe28e', '#e1f59a']} 
            style={Styles.linearGradienText}>
            <Text 
                style={Styles.messageText} >
                Salut tu vas bien ?
            </Text>                    
        </LinearGradient> 

        <View style={Styles.separator}></View>

        {/* Message de l'autre personne */}
        <LinearGradient 
            colors={['#BA55D3', '#bf78b2']} 
            style={Styles.linearGradienText}>
            <Text 
                style={Styles.messageText} >
                Non et toi ?
            </Text>                    
        </LinearGradient> 

        <View style={Styles.separator}></View>

        <TextInput
            style={{ height: 40, borderWidth: 1 }}
            // onChangeText={text => onChangeText(text)}
            //  value={value}
        />
    </View>
)  