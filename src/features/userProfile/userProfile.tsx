import React, { Component } from 'react';
import {
    View,
    Text,
    Button, 
    ActivityIndicator,
    Image,
    Alert,
} from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import Icon from 'react-native-ionicons';

import { User } from '../../models/User';
import { getMe, deconnection } from '../../core/http/userHttpService';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { UserProfileStyles } from '../../styles/userProfile/style';
import { colors } from 'react-native-elements';
import { Pictures } from '../../models/Pictures';
import { NavigationEvents } from 'react-navigation';

type NavigateProp = {
    navigation: NavigationStackProp
};

type Photos = {
    photos: Array<Pictures>
};

type SinglePhoto = {
    base64: string
};

type UserInfoProp = {
    info: {iconName: string, value: string | number | Date}
};

export class UserProfile extends Component<NavigateProp> {

    state={
        user: {},
        userInfos: new Array(),
        isLoading: true,
        pictures: new Array<Pictures>(),
    };

    async loadBack() {
        this.setState({
            isLoading: true
        });

        getMe(
            (user: User) => {
                this.setState({
                    user: user,
                    userInfos: renderUserInfoArray(user),
                    isLoading: false,
                    pictures: user.pictures,
                })
            },
            () => {
                this.props.navigation.navigate("Main");
            }
        )  
    }

    async componentDidMount() {
        this.setState({
            isLoading: true
        });

        getMe(
            (user: User) => {
                this.setState({
                    user: user,
                    userInfos: renderUserInfoArray(user),
                    isLoading: false,
                    pictures: user.pictures,
                })
            },
            () => {
                this.props.navigation.navigate("Main");
            })

    };

    deconnection = () => {
        deconnection(
            () => {
                this.props.navigation.navigate("Main");
            },
            () => {
                Alert.alert("Error");
            }
        )
    };

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator
                        size="large"
                        color={colors.success}
                    />
                </View>
            )
        };

        return (
            <ScrollView>
                <NavigationEvents
                    onDidFocus={() => {
                        let back = this.props.navigation.getParam("back");
                        console.log(back);
                        if (back) {
                            this.loadBack()
                        };
                    }}
                />
                <Button
                    title="Modifier mon profil"
                    onPress={() => this.props.navigation.navigate("ModifyUserProfile", {
                        user: this.state.user
                    })}
                />
                <FlatList
                    data={this.state.userInfos}
                    renderItem={({ item }) => {
                        return <UserInfoLine info={item}/>
                    }}
                    keyExtractor={item => item.key}
                    ItemSeparatorComponent={FlatListItemSeparator}
                />
                <Photos photos={this.state.pictures} />
                <Button 
                    title={"déconnexion"}
                    onPress={() => this.deconnection()}
                    color={colors.error}
                />
            </ScrollView>
        )
    }
}

const UserInfoLine:React.FC<UserInfoProp> = (props) => (
    <View style={[UserProfileStyles.body, UserProfileStyles.profileInfosList]}>
        <Icon
            name={props.info.iconName}
            size={25}
            color={colors.success}
        />
        {checkUserValue(props.info)}
    </View>
);

const Photos: React.FC<Photos> = (props) => (
    <View style={[UserProfileStyles.photos, UserProfileStyles.paddingLR]}>
        <Text style={UserProfileStyles.photoTitle }>Photos :</Text>
        <View style={UserProfileStyles.photosContainer}>
            {checkPhotos(props.photos[0])}
            {checkPhotos(props.photos[1])}
            {checkPhotos(props.photos[2])}
        </View>
    </View>
);

const DisplayPhotos: React.FC<SinglePhoto> = (props) => (
    <View style={UserProfileStyles.photoView}>
        <Image
            style={UserProfileStyles.photo}
            source={{ uri: props.base64 }}
        />       
    </View>
);

const EmptyPhoto: React.FC = () => (
    <View style={UserProfileStyles.photoView}>
        <View style={[UserProfileStyles.photo, UserProfileStyles.emptyPhoto]}>
            <Icon
                android="md-close"
                ios="ios-close"
                color={colors.success}
            />
        </View>
     </View>
);

const renderUserInfoArray = (user: User): Array<Object> => {
    let userInfos = [];

    userInfos = [
        {
            "iconName": "mail",
            "value": user.email,
        },
        {
            "iconName": "book",
            "value": user.name,
        },
        {
            "iconName": "transgender",
            "value": (user.gender === "male" ? "Homme" : "Femme")
        },
        {
            "iconName": "calendar",
            "value": user.birth
        },
        {
            "iconName": "text",
            "value": user.description
        },
    ];
    return userInfos;
};

const checkUserValue = (value: {iconName: string, value: any}) => {
    if (value.iconName === "calendar") {
        return (
            <Text style={UserProfileStyles.profileInfosText}>
                { formatDate(value.value) }
            </Text>
            /*<Moment format="DD/MM/YYYY">
                {value.value}
            </Moment>*/
        )
    } else {
        return (
            <Text style={UserProfileStyles.profileInfosText}>
                {value.value}
            </Text>
        )
    }
}

const formatDate = (date: Date): string => {
    let day: any;
    let month: any;
    date = new Date(date);
    day=date.getDate();
    month=date.getMonth();
    month=month+1;
    if((String(day)).length==1)
    day='0'+day;
    if((String(month)).length==1)
    month='0'+month;

    let dateT=day+ '/' + month + '/' + date.getFullYear();
    return dateT;
};

const FlatListItemSeparator: React.FC = () => {
    return (
        <View
            style={{
                height: 1,
                backgroundColor: "#000",
                marginTop: 10,
                marginLeft: 40,
                marginRight: 40
            }}
        />
    );
}

const checkPhotos = (photo: Pictures | null) => {
    if (!photo) {
        return <EmptyPhoto />
    } else {
        return <DisplayPhotos base64={photo.base64}/>
    }
};
