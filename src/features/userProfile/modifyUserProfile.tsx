import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity, ActivityIndicator, Image, TextInput, Alert } from 'react-native';
import Icon from 'react-native-ionicons';
import ImagePicker from 'react-native-image-picker';
import ImageResizer from 'react-native-image-resizer';
import RNFS from 'react-native-fs'
import Spinner from 'react-native-loading-spinner-overlay';

import { UserProfileStyles } from '../../styles/userProfile/style';
import { colors } from 'react-native-elements';
import { User } from '../../models/User';
import { Pictures } from '../../models/Pictures';
import { NavigationStackProp } from 'react-navigation-stack';
import { postPicture, deletePicture, updateDesc } from '../../core/http/userHttpService';

type Navigateprop = {
    navigation: NavigationStackProp
};

/** Types declaration for props */
type UserDesc = {
    description: string;
    saveDesc: Function
};

type Photos = {
    photos: Array<Pictures>
};

type SinglePhoto = {
    photo: Pictures
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

export class ModifyUserProfile extends Component<Navigateprop> {
    state = {
        user: {},
        userId: '',
        description: '',
        photos: [],
        spinner: false
    };

    componentDidMount() {
        // Fetch API with userId to retrieve user informations
        let user: User = this.props.navigation.getParam("user");

        // Then, put in state
        this.setState({
            userId: user._id,
            description: user.description,
            photos: user.pictures
        });
    };

    saveDesc = (description: string) => {
        // Assign description on onChange event
        this.setState({
            description: description
        })
    };

    addPhoto = async () => {
        // Launch ImagePicker to add a photo
        ImagePicker.showImagePicker(options, (response) => {
            if (response.error) {
                Alert.alert("Une erreur est survenue : " + response.error );
            } else if (response.data) {
                this.setState({
                    spinner: true
                });
        
                response.data =  `data:image/jpeg;base64,${response.data}`
                ImageResizer.createResizedImage(
                    response.data,
                    100,
                    200,
                    "JPEG",
                    100
                ).then(async response => {
                    let base64 = await RNFS.readFile(response.path, "base64");
                    base64 = `data:image/jpeg;base64,${base64}`;
                    postPicture(
                        this.state.userId,
                        base64,
                        ((pictureId: string) => {
                            let newPhotos = addNewPhoto(this.state.photos, base64, pictureId);
                            this.setState({
                                photos: newPhotos,
                                spinner: false
                            });
                        }),
                        ((error: any) => {
                            this.setState({
                                spinner: false
                            });
                            Alert.alert(error)
                        })
                )});                
            }
        });
    };

    deletePhoto = (order: number, pictureId: string) => {
        this.setState({
            spinner: true
        });
        // Fetch api to delete a picture
        deletePicture(
            pictureId,
            this.state.userId,
            () => {
                let newPhotos = deletePhoto(this.state.photos, order);

                this.setState({
                    photos: newPhotos,
                    spinner: false
                });
            },
            (error: any) => {
                Alert.alert(error)
                this.setState({
                    spinner: false
                });
            }
        )
    };

    saveProfile = () => {
        // Fetch API to update the user with state values
        this.setState({
            isLoading: true
        });

        updateDesc(
            this.state.description,
            this.state.userId,
            () => {
                this.setState({
                    isLoading: false
                });
                this.props.navigation.navigate("UserProfile", {
                    back: true
                });
            },
            () => {
                this.setState({
                    isLoading: false
                });
                Alert.alert("Server error")
            }
        );
    }

    render() {
        return (
            <View style={UserProfileStyles.body}>
                <Spinner
                    visible={this.state.spinner}
                    textContent={'Chargement...'}
                    overlayColor={"rgba(0, 0, 0 , 0.60)"}
                    textStyle={{color: "white"}}
                />
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
        <View style={UserProfileStyles.photosContainer}>
            {checkPhotos(props.photos[0], props.addPhoto, props.deletePhoto)}
            {checkPhotos(props.photos[1], props.addPhoto, props.deletePhoto)}
            {checkPhotos(props.photos[2], props.addPhoto, props.deletePhoto)}
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
            source={{ uri: props.photo.base64 }}
        />

        <TouchableOpacity
            style={UserProfileStyles.deleteIcon}
            onPress={() => props.deletePhoto(props.photo.order, props.photo._id)}
        >
            <Icon 
                android="md-close"
                ios="ios-close"
                size={25}
                color={colors.error}
            />
        </TouchableOpacity>        
    </View>
);

const checkPhotos = (
    photo: Pictures | null,
    addPhoto: Function,
    deletePhoto: Function
    ) => {
    if (!photo) {
        return <EmptyPhoto addPhoto={addPhoto} deletePhoto={deletePhoto}/>
    } else {
        return <DisplayPhotos
            photo={photo}
            addPhoto={addPhoto}
            deletePhoto={deletePhoto}
            />
    }
};

const addNewPhoto = (photos: Array<Pictures>, base64: string, pictureId: string): Array<Pictures> => {

    for(let i = 0; i < 3; i++) {
        if (!photos[i]) {
            photos.push({
                _id: pictureId,
                base64: base64,
                order: i
            });
            break;
        }
    }
    return photos;
};

const deletePhoto = (photos: Array<Pictures>, order: number): Array<Pictures> => {

    if (photos.length === 1 && order === 0) {
        photos = [];
    } else {
        photos.splice(order, 1);
    };

    for (let i = 0; i < photos.length; i++) {
        if (i >= order) {
            photos[i].order = (photos[i].order - 1);
        }
    };
    return photos;
}
