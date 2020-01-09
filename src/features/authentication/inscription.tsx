import React, { Component } from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ButtonGroup, colors } from 'react-native-elements';
import { Styles } from '../../styles/style';
import { NavigationStackProp } from 'react-navigation-stack';
import { inscription } from '../../api/inscriptionHttpService';

// Initialize variable prop navigation
type NavigateProp = {
    navigation: NavigationStackProp
};

// Initialize variable
let isControlMail: boolean = false;
let isControlPassword: boolean = false;
let isControlFirstName: boolean = false;

// Initialize 
const regMail = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
const regPassword = new RegExp('^.{8,}$');

// Initialize list gender
let gendersCriterias = {
    buttons: [
        "Homme",
        "Femme"
    ],
    values: [
        "male",
        "female"
    ]
};

// Control email (regex)
const controlTextEmail = (mail: string):boolean => {
    if (!regMail.test(mail)) {        
        return false;
    }
    else {
        return true;
    }
};

// Control password (regex)
const controlTextPassword = (password: string):boolean => {
    if (!regPassword.test(password)) {
        return false;        
    }
    else {
        return true;
    }
};

// Control if TextInpue firstnale is empty
const controleTextFirstName = (textValue: string):boolean => {
    if (textValue == null) {
        return false;
    }
    else {
        return true;
    }
};

// Principal component page
export class CreateAccountPage extends Component<NavigateProp> {
    render() {
        return (            
            <View style={Styles.body}>
                <TitleInscription />
                <CreateBaseAccount navigation={this.props.navigation}/>
            </View>
        )
    }   
}

// Component Title
const TitleInscription: React.FC = () => (    
    <View style={Styles.flexSecond}>
        <Text style={Styles.title}>REVEALIN</Text>           
    </View>
)  

// Component body 
class CreateBaseAccount extends Component<NavigateProp> {
    // Get props
    constructor(props: any) {
        super(props)    
    };

    state = {    
        // State for all Data user        
        mail: '',
        name: '',
        password: '',
        genderIndex: 0,
        birth: new Date('May 22, 1997 03:24:00'),
        description: '',
        localization: {
            lat: 45.745726,
            lon: 4.837758
        },
        // State for style
        borderColor: 'black'
    };

    // Update state gender when user chang it
    genderChange = (newGenderIndex: number) => {
        if (gendersCriterias.buttons[newGenderIndex]) {
            this.setState({
                genderIndex: newGenderIndex
            })
        }
    };

    // Update the color of border in TextInput when value changed 
    setChangeStyle = (value : boolean) => {
        if (!value) {
            this.setState({
                borderColor: '#f00000'
            });
        } else {                        
            this.setState({
                borderColor: '#008000'
            });
        }
    }

    // Routing method regex for all data
    choiceRegex = (myValue: string, regexValue: String) => {
        switch(regexValue) {
            case "email":
                // Update state
                this.setState({
                    mail: myValue
                })
                // Control champ with regex
                isControlMail = controlTextEmail(myValue);   
                // Change style (If he needs it)
                this.setChangeStyle(isControlMail);
            break;

            case "password":
                this.setState({
                    password: myValue
                })
                isControlPassword = controlTextPassword(myValue);
                this.setChangeStyle(isControlPassword);
            break;

            case "firstName":
                this.setState({
                    name: myValue
                })
                isControlFirstName = controleTextFirstName(myValue);
                this.setChangeStyle(isControlFirstName);
            break;

            case "":
                this.setState({
                    description: myValue
                });
            break;
            default: break;
        }   
    };

    // Method --> Sending new user API
    validatePage = () => {        
        if (controlTextEmail(this.state.mail) && controlTextPassword(this.state.password) && controleTextFirstName(this.state.name)) {            
            // Call API with data
            inscription(this.state.mail, this.state.name, this.state.password, gendersCriterias.values[this.state.genderIndex], this.state.birth ,this.state.description, this.state.localization, ()=> {
                // Navigation 
                this.props.navigation.navigate('Main')
            });    
        } else {
            Alert.alert("Un champ n'est pas renseigné correctement.")
        }
    };    
    
    render() {  
        // Variable style with state 
        const styles = {
            input: {
                height: 40, 
                borderColor: this.state.borderColor,
                borderWidth: 1
            }
        };
        // Buffer  
        const { input } = styles; 

        return(      
            <View style={Styles.flexThird}>
                <Text style={Styles.subTitle}>Créer votre compte</Text> 

            {/* START DATA LIST */}
                <Text style={Styles.label}>Adresse mail</Text>
                <TextInput
                    // style={Styles.input}
                    style={input}
                    secureTextEntry={false}
                    onChangeText={value => this.choiceRegex(value, "email")}
                />
                <Text style={Styles.label}>Mot de passe</Text>
                <TextInput
                    // style={Styles.input}
                    style={input}
                    secureTextEntry={true}
                    onChangeText={value => this.choiceRegex(value, "password")}
                />
                <Text style={Styles.label}>Confirmation du mot de passe</Text>
                <TextInput
                    // style={Styles.input}
                    style={input}
                    secureTextEntry={true}
                    onChangeText={value => this.choiceRegex(value, "password")}
                />
                <Text style={Styles.label}>Séléctionnez votre genre</Text>
                <ButtonGroup
                    onPress={this.genderChange}
                    buttons={gendersCriterias.buttons}
                    selectedIndex={this.state.genderIndex}
                    buttonStyle={{ backgroundColor: 'white' }}
                    selectedButtonStyle={{ backgroundColor: colors.success }}
                    containerStyle={{borderColor: 'black'}}
                />
                <Text style={Styles.label}>Prénom</Text>
                <TextInput
                    // style={Styles.input}
                    style={input}
                    secureTextEntry={false}
                    onChangeText={value => this.choiceRegex(value, "firstName")}
                />
                <Text style={Styles.label}>Description</Text>
                <TextInput
                    // style={Styles.input}
                    style={input}
                    secureTextEntry={false}
                    onChangeText={value => this.choiceRegex(value, "")}
                />
                <View style={Styles.separator} />
            {/* END DATA LIST */}
            
                {/* <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                    <CheckBox />
                    <Text style={Styles.label}>J'accepte les termes...</Text>
                </View> */}


                {/* <View style={Styles.separator} /> */}
                
                <LinearGradient 
                    colors={['#abe28e', '#e1f59a']} 
                    style={Styles.linearGradientButton}>
                    <Text 
                        style={Styles.buttonText} 
                        onPress={this.validatePage}
                        >
                        Valider
                    </Text>                    
                </LinearGradient>   
            </View>
        )
    }
}