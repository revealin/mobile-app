import React, { Component } from 'react';
import { View, Text, TextInput, Button, Alert, CheckBox, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ButtonGroup } from 'react-native-elements';
import { Styles } from '../../styles/style';
import { Colors } from 'react-native/Libraries/NewAppScreen';

/*
    CREATE ACCOUNT
*/
export class MatchPage extends Component {
    render() {
        return (            
            <View style={Styles.body}>
                <Text style={Styles.matchTitle}>Tes matchs</Text>
                <Menu />
            </View>
        )
    }   
}

const Menu: React.FC = () => (       
    <View style={Styles.flexThird}>
        {/* Si c'est ton message */}
        <LinearGradient 
            colors={['#abe28e', '#e1f59a']} 
            style={Styles.linearGradienText}>
            <Text 
                style={Styles.messageText} >
                Valider
            </Text>                    
        </LinearGradient> 
    </View> 
)  