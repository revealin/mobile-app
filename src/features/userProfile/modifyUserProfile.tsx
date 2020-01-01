import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity, FlatList, Image, TextInput, Alert } from 'react-native';
import Icon from 'react-native-ionicons';
import ImagePicker from 'react-native-image-picker';

import { UserProfileStyles } from '../../styles/userProfile/style';
import { colors } from 'react-native-elements';
import { User } from '../../models/User';
import { Pictures } from '../../models/Pictures';


/** Types declaration for props */
type UserDesc = {
    description: string;
    saveDesc: Function
};

type Photos = {
    photos: Array<Pictures>
};

type SinglePhoto = {
    base64: string,
    order: number
};

type PhotosFcts = {
    addPhoto: Function;
    deletePhoto: Function
};

type SaveProfile = {
    saveProfile: Function
}

// Image picker options
const options = {
    title: "Choisissez une photo",
    takePhotoButtonTitle: "Prendre une photo",
    cancelButtonTitle: "Annuler",
    chooseFromLibraryButtonTitle: "Choisir depuis la gallerie",
    customButtons: [],
    storageOptions: {
        skipBackup: true
    },
};

export class ModifyUserProfile extends Component {
    static navigationOptions = {
        title: "Modifier mon profil",
    };

    description: string = '';

    state = {
        description: '',
        photos: []
    };

    async componentDidMount() {
        // Fetch API with userId to retrieve user informations
        let newUser = new User(
            'test@test.test',
            'Jean Kevin',
            'vLorem Ipsum rfbrebrbrekre',
            [
                {
                    base64: "",
                    order: 1
                },
                {
                    base64: "",
                    order: 2
                },
                {
                    base64:"",
                    order: 3
                },
            ]
        );
        // Then, put in state
        this.setState({
            description: newUser.description,
            photos: newUser.pictures
        });
    };

    saveDesc(description: string) {
        // Assign description on onChange event
        this.description = description;
    };

    addPhoto = async () => {
        // Launch ImagePicker to add a photo
        ImagePicker.showImagePicker(options, (response) => {
            if (response.error) {
                Alert.alert("Une erreur est survenue : " + response.error );
            } else if (response.data) {
                let newPhotos = addNewPhoto(this.state.photos, response.data);

                this.setState({
                    photos: newPhotos
                });                
            }
        });
    };

    deletePhoto = (order: number) => {
        // Fetch api to delete a picture

        let newPhotos = deletePhoto(this.state.photos, order);

        this.setState({
            photos: newPhotos
        });
    };

    saveProfile = () => {
        // Fetch API to update the user with state values

        // Fetch to update description

        // Fetch to update pictures 
            // then navigate to swipe page
    }

    render() {
        return (
            <View style={UserProfileStyles.body}>
                <DescriptionComponent
                    description={this.state.description}
                    saveDesc={this.saveDesc}
                />
                <Photos 
                    photos={this.state.photos}
                    addPhoto={this.addPhoto}
                    deletePhoto={this.deletePhoto}
                />
                <SaveBtn 
                    saveProfile={this.saveProfile}
                />
                <ProblemReport />
            </View>
        )
    }
};

const DescriptionComponent: React.FC<UserDesc> = (props) => (
    <View style={[UserProfileStyles.description, UserProfileStyles.paddingLR]}>
        <Text>Description</Text>
        <View style={UserProfileStyles.descriptionView}>
            <TextInput
                underlineColorAndroid='transparent'
                textAlignVertical='top'
                multiline = {true}
                numberOfLines = {8}
                editable
                defaultValue={props.description}
                maxLength={500}
                onChangeText={value => props.saveDesc(value)}                 
            />
        </View>
    </View>
);

const Photos: React.FC<Photos & PhotosFcts> = (props) => (
    <View style={[UserProfileStyles.photos, UserProfileStyles.paddingLR]}>
        <Text style={ UserProfileStyles.photoTitle }>Photos</Text>
        <View>
            <FlatList
                style={UserProfileStyles.photosList}
                numColumns={3}
                data={props.photos}
                initialNumToRender={3}
                renderItem={({ item }) => {
                    if (item.base64 && typeof item.base64 === 'string') {
                    return <DisplayPhotos  base64={item.base64} 
                        order={item.order}
                        addPhoto={props.addPhoto}
                        deletePhoto={props.deletePhoto} />
                    } else {
                        return <EmptyPhoto addPhoto={props.addPhoto}
                        deletePhoto={props.deletePhoto} />
                    }
                }}
                keyExtractor={item => item.base64}
            />
        </View>
    </View>
);

const SaveBtn: React.FC<SaveProfile> = (props) => (
    <View style={UserProfileStyles.saveBtn}>
        <Button
            title="Enregistrer"
            color={colors.success}
            onPress={() => props.saveProfile()}
        />
    </View>
);

const ProblemReport: React.FC = () => (
    <View style={UserProfileStyles.report}>
        <Button 
            title="SIGNALER UN PROBLEME"
            color="#DB524C"
            onPress={() => Alert.alert('Problem reported')}
        />
    </View>
);

const EmptyPhoto: React.FC<PhotosFcts> = (props) => (
    <View style={UserProfileStyles.photoView}>
        <TouchableOpacity
            onPress={() => props.addPhoto()}
            style={[UserProfileStyles.photo, UserProfileStyles.emptyPhoto]}
        >
            <Icon
                android="md-add-circle-outline"
                ios="ios-add-circle-outline"
                color={colors.success}
            />

        </TouchableOpacity>
    </View>
)

const DisplayPhotos: React.FC<SinglePhoto & PhotosFcts> = (props) => (
    <View style={UserProfileStyles.photoView}>
        <Image
            style={UserProfileStyles.photo}
            source={{ uri: props.base64 }}
        />
        
        <TouchableOpacity
            style={UserProfileStyles.deleteIcon}
            onPress={() => props.deletePhoto(props.order)}
        >  
            <Icon 
                android="md-close"
                ios="ios-close"
                size={25}
                color={colors.error}
            />
        </TouchableOpacity>        
    </View>
)

const addNewPhoto = (photos: Array<Pictures>, base64: string): Array<Pictures> => {

    for (let i = 0; i < photos.length; i++) {
        if (photos[i].base64 == "") {
            photos[i].base64 = `data:image/jpeg;base64,${base64}`;
            photos[i].order = (i + 1);
            break
        }
    }
    return photos;
};

const deletePhoto = (photos: Array<Pictures>, order: number): Array<Pictures> => {
    // Check order 
    let loopOrder = order;

    // Re organize the pictures array
    for (let i = 0; i < photos.length; i++) {
        if (loopOrder < 3 ) {
            photos[(loopOrder - 1)] = {
                ...photos[loopOrder],
                order: loopOrder
            }
        } else if (loopOrder === 3) {
            photos[2] = {
                base64: "",
                order: loopOrder
            }
        }

        loopOrder++;
    };

    return photos;
}
