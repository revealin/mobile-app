import React, { Component } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, FlatList, Image } from 'react-native';
import { UserProfileStyles } from '../../styles/userProfile/style';

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaMlUbPKRkWDuPrGLln27cr6_EK6ipM3Rw_vxNIxDaOVJA2e4O&s',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      link: 'https://www.supinfo.com/articles/resources/204633/7729/0.jpg',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',

    },
];

export class ModifyUserProfile extends Component {
    static navigationOptions = {
        title: "Modifier mon profil",
    };

    render() {
        return (
            <View style={UserProfileStyles.body}>
                <Description />
                <Photos />
                <ProblemReport />
            </View>
        )
    }
}

class Description extends Component {
    render() {
        return (
            <View style={[UserProfileStyles.description, UserProfileStyles.paddingLR]}>
                <Text>Description</Text>
                <View style={UserProfileStyles.descriptionView}>
                    <TextInput
                        underlineColorAndroid='transparent'
                        textAlignVertical='top'
                        multiline = {true}
                        numberOfLines = {8}
                        editable
                        maxLength={200}
                    />
                </View>
            </View>
        )
    }
}

class Photos extends Component {
    render() {
        return (
            <View style={[UserProfileStyles.photos, UserProfileStyles.paddingLR]}>
                <Text>Photos</Text>
                <View>
                    <FlatList
                        style={UserProfileStyles.photosList}
                        numColumns={3}
                        data={DATA}
                        initialNumToRender={3}
                        renderItem={({ item }) => {
                            if (item.link) {
                               return <DisplayPhotos base64Code={item.link} />
                            } else {
                                return <EmptyPhoto />
                            }
                        }}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
        )
    }
}

class ProblemReport extends Component {
    render() {
        return (
            <View style={UserProfileStyles.report}>
                <Button 
                    title="SIGNALER UN PROBLEME"
                    color="#DB524C"
                />
            </View>
        )
    }
}

const EmptyPhoto: React.FC = () => (
    <View style={UserProfileStyles.photoView}>
        <TouchableOpacity onPress={() => alert('test')} style={UserProfileStyles.photo}>
            <Text>Lorem Ipsum</Text>
        </TouchableOpacity>
    </View>
)

const DisplayPhotos: React.FC = ({ base64Code }) => (
    <View style={UserProfileStyles.photoView}>
        <Image 
            style={UserProfileStyles.photo}
            source={{ uri: base64Code}}
        />
    </View>
)
