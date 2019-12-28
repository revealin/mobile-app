import React, { Component } from 'react';
import { View, Text, TextInput, Button, Alert, CheckBox, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ButtonGroup } from 'react-native-elements';
import { Styles } from '../../styles/style';
import { Colors } from 'react-native/Libraries/NewAppScreen';

/*
    CREATE ACCOUNT
*/
export class CreateAccountPage extends Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (            
            <View style={Styles.body}>
                <TitleInscription />
                <CreateBaseAccount navigation={this.props.navigation}/>
            </View>
        )
    }   
}

const TitleInscription: React.FC = () => (    
    <View style={Styles.flexSecond}>
        <Text style={Styles.title}>REVEALIN</Text>           
    </View>
)  
const CreateBaseAccount: React.FC = () => (             
    <View style={Styles.flexThird}>
        <Text style={Styles.subTitle}>Créer votre compte</Text> 

        <Text style={Styles.label}>Adresse e-mail:</Text>
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            //   onChangeText={text => onChangeText(text)}
            //   value={value}
        />
        <Text style={Styles.label}>Mot de passe:</Text>
        <TextInput 
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            //   onChangeText={text => onChangeText(text)}
            //   value={value}
            secureTextEntry={true}
        />
        <Text style={Styles.label}>Confirmation du mot de passe:</Text>
        <TextInput 
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            //   onChangeText={text => onChangeText(text)}
            //   value={value}
            secureTextEntry={true}
        />

        <View style={{flexDirection:'row', flexWrap:'wrap'}}>
            <CheckBox />
            <Text style={Styles.label}>J'accepte les termes...</Text>
        </View>


        {/* <View style={Styles.separator} /> */}
        
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
)

const CreateProfilAccount: React.FC = () => (     
    <View style={Styles.flexThird}>
        <Text style={Styles.subTitle}>Personnalisez votre profil</Text> 
        <ButtonGroup
            onPress={() => Alert.alert('Left button pressed')}
            selectedIndex={2}
            buttons={['Homme', 'Femme', 'Autres']}
        />
       
        <Text style={Styles.label}>Prénom:</Text>
        <TextInput 
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            //   onChangeText={text => onChangeText(text)}
            //   value={value}
            secureTextEntry={true}
        />

        <Text style={Styles.label}>Age:</Text>
        <TextInput 
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            //   onChangeText={text => onChangeText(text)}
            //   value={value}
            secureTextEntry={true}
        />

        <Text style={Styles.label}>Description:</Text>
        <TextInput 
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
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
                    Suivant
                </Text>                    
            </LinearGradient>      
    </View>
)

const CreatePictureAccount: React.FC = () => (  
    <View style={Styles.flexThird}>
        <Text style={Styles.subTitle}>A quoi ressembles-tu ?</Text> 
        <Image
            style={{width: 'auto', height: 550}}
            source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}
        />
        <View style={Styles.separator} />
        <LinearGradient 
                colors={['#abe28e', '#e1f59a']} 
                style={Styles.linearGradientButton}>
                <Text 
                    style={Styles.buttonText} 
                    onPress={() => navigate('Register')}>
                    Suivant
                </Text>                    
            </LinearGradient> 
        <Text
            onPress={() => this.props.navigation.navigate("Register")}
            style={Styles.switchLink}
        >
            Me connecter
        </Text>
    </View>
)