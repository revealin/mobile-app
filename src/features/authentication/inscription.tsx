import React, { Component } from 'react';
import { View, Text, TextInput, Button, Alert, CheckBox, Image } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import { Styles } from '../../styles/style';

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
                {/* <CreateBaseAccount /> */}
                <CreateProfilAccount navigation={this.props.navigation}/>
                <CreatePictureAccount navigation={this.props.navigation}/>
            </View>
        )
    }   
}

const CreateBaseAccount: React.FC = () => (             
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

            <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                <CheckBox />
                <Text style={Styles.content}>J'accepte les termes...</Text>
            </View>


            {/* <View style={Styles.separator} /> */}
            
            <Button
                title="Valider"
                onPress={() => Alert.alert('Left button pressed')}
            />    
        </View>
    </>
)

const CreateProfilAccount: React.FC = () => (     
    <View style={Styles.sectionContainer}>
        <Text style={Styles.title}>Personnalisez votre profil</Text> 
        <View style={Styles.separator} />  
        <ButtonGroup
            onPress={() => Alert.alert('Left button pressed')}
            selectedIndex={2}
            buttons={['Homme', 'Femme', 'Autres']}
        />
        <Text style={Styles.content}>Prénom:</Text>
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            //   onChangeText={text => onChangeText(text)}
            //   value={value}
        />
        <Text style={Styles.content}>Age:</Text>
        <TextInput 
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            //   onChangeText={text => onChangeText(text)}
            //   value={value}
            secureTextEntry={true}
        />

        <Text style={Styles.content}>Description:</Text>
        <TextInput 
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            //   onChangeText={text => onChangeText(text)}
            //   value={value}
            secureTextEntry={true}
        />
        
        <View style={Styles.separator} />
        
        <Button
            title="Suivant"
            onPress={() => Alert.alert('Passe à la page suivante.')}
        />    
    </View>
)

const CreatePictureAccount: React.FC = () => (  
    <View style={Styles.sectionContainer}>
        <Text style={Styles.title}>A quoi ressembles-tu ?</Text> 
        <View style={Styles.separator} />  
        <Image
            style={{width: 'auto', height: 550}}
            source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}
        />
        <View style={Styles.separator} />
        <Button
            title="Suivant"
            onPress={() => Alert.alert('Passe à la page suivante.')}
        />  
        <Text
            onPress={() => this.props.navigation.navigate("Register")}
            style={Styles.switchLink}
        >
            Me connecter
        </Text>
    </View>
)