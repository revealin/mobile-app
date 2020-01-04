import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { ButtonGroup, Overlay, colors } from 'react-native-elements';
import Slider from '@react-native-community/slider';

import { SwipeStyles } from '../../styles/swipe/style';
import { TextInput } from 'react-native-gesture-handler';

type DescProps = {
    description: string
};

type NameAgeProps = {
    name: string,
    age: number,
};

type YesNoProps = {
    yesNoChoice: Function
};

type UserProps = {
    // user: User; 
    description: string,
    name: string,
    age: number,
    yesNoChoice: Function
};

type customOverlayProps = {
    isVisible: boolean,
    toggleOverlay: Function,
    search: Function
};

type overlayFctProps = {
    toggleOverlay: Function
};

let gendersCriterias = {
    buttons: [
        "Homme",
        "Femme",
        "Autre"
    ]
};

let yesNoBtns = [
    "NON",
    "YES"
];

export class SwipePage extends Component {

    state = {
        overlayIsVisible: false,
        proposedUser: {
            description: "default",
            name: "default",
            age: 18
        }
    };

    toggleOverlay = () => {
        this.setState({
            overlayIsVisible: !this.state.overlayIsVisible
        });
    };

    search = async (criterias: Object) => {
        // Fetch api and give the result user in the state
        this.toggleOverlay();
    }

    yesNoChoice(index: number) {
        if (yesNoBtns[index]) {
            // FETCH API
        }
    }

    async componentDidMount() {
        // Fetch API and define proposedUser value in the state
        this.setState({
            proposedUser: {
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in tempor sapien, quis hendrerit ante. Aliquam ullamcorper odio vitae leo maximus elementum. Etiam diam turpis, viverra eget hendrerit et, auctor ultrices augue. Praesent vitae ipsum hendrerit, bibendum leo ut, viverra nunc",
                name: "Prénom",
                age: 19
            }
        })
    };

    render() {
        return (
            <View style={SwipeStyles.body}>
                <CustomOverlay 
                    isVisible={this.state.overlayIsVisible}
                    toggleOverlay={this.toggleOverlay}
                    search={this.search}    
                />
                <Search toggleOverlay={this.toggleOverlay} />
                <Swipe 
                   // user={this.state.proposedUser}
                    yesNoChoice={this.yesNoChoice}
                    description={this.state.proposedUser.description}
                    name={this.state.proposedUser.name}
                    age={this.state.proposedUser.age}/>
            </View>
        )
    }
}

const Search: React.FC<overlayFctProps> = (props) => (
    <View style={SwipeStyles.searchMenu}>
        <Text
            style={SwipeStyles.searchTitle}
            onPress={() => props.toggleOverlay()}
        >Critères de recherche</Text>
    </View>
);

class CustomOverlay extends Component<customOverlayProps> {

    constructor(props: any) {
        super(props)
    };

    state = {
        ageValue: 18,
        genderIndex: 0,
    };

    sliderValueChange = (age: number) => {
        this.setState({
            ageValue: age
        })
    };

    genderChange = (genderIndex: number) => {
        if (gendersCriterias.buttons[genderIndex]) {
            this.setState({
                genderIndex: genderIndex
            })
        }
    };

    render() {
        return(
            <Overlay 
                isVisible={this.props.isVisible}
            >
                <View style={SwipeStyles.overlay}>
                    <Text style={SwipeStyles.overlayTitle}>
                        Critères de recherche
                    </Text>
                    <View style={SwipeStyles.overlayAgeView}>
                        <Text>
                            Âge
                        </Text>
                        <Slider
                            minimumValue={18}
                            maximumValue={99}
                            value={this.state.ageValue}
                            step={5}
                            onValueChange={value => this.sliderValueChange(value)}
                        />
                        <Text style={SwipeStyles.overlaySliderValue}>  
                            {this.state.ageValue}
                        </Text>
                    </View>
                    <View style={SwipeStyles.overlayGenderView}>
                        <ButtonGroup
                            onPress={this.genderChange}
                            buttons={gendersCriterias.buttons}
                            selectedIndex={this.state.genderIndex}
                            buttonStyle={{ backgroundColor: 'white' }}
                            selectedButtonStyle={{ backgroundColor: colors.success }}
                            containerStyle={{borderColor: 'black'}}
                        />
                    </View>
                    <View style={SwipeStyles.overlayBtns}>
                        <View style={SwipeStyles.overlayCloseBtnView}>
                            <Button
                                onPress={() => {
                                    this.props.toggleOverlay()
                                }}
                                title="Fermer"
                                color={colors.error}
                            />
                        </View>
                        <View style={SwipeStyles.overlaySearchBtn}>
                            <Button
                                onPress={() => {
                                    this.props.search(this.state)
                                }}
                                title="Chercher"
                                color={colors.success}
                            />
                        </View>
                    </View>
                </View>
            </Overlay>
        )
    }
}

const Swipe:React.FC<UserProps> = (props) => (
    <View style={SwipeStyles.swipe}>
        <Description description={props.description} />
        <Name name={props.name} age={props.age} />
        <YesNoChoice yesNoChoice={props.yesNoChoice}/>
    </View>
);

const Description: React.FC<DescProps> = (props) => (
    <TextInput
        style={SwipeStyles.description}
        underlineColorAndroid='transparent'
        textAlignVertical='top'
        editable={false}
        multiline= {true}
        numberOfLines = {8}
        maxLength={500}
        value={props.description}
    />
)

const Name: React.FC<NameAgeProps> = (props) => (
    <View style={SwipeStyles.nameView}>
        <Text style={SwipeStyles.nameText}>
            {props.name}, {props.age} ans
        </Text>
    </View>
)

class YesNoChoice extends Component<YesNoProps> {
    constructor(props: any) {
        super(props)
    };

    state = {
        yesNoIndex: null
    };

    yesNoChange = (index: number) => {
        if (yesNoBtns[index]) {
            this.setState({
                yesNoIndex: index
            });

            this.props.yesNoChoice(index);
        }
    }

    render() {
        return(
            <ButtonGroup
                onPress={this.yesNoChange}
                buttons={yesNoBtns}
                containerStyle={{flex: 1, borderColor: 'black'}}
                selectedIndex={this.state.yesNoIndex}
                selectedButtonStyle={(this.state.yesNoIndex === 0 ? { backgroundColor: colors.error } : { backgroundColor: colors.success })}
            />
        )
    }
}
