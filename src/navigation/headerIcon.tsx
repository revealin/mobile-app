import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-ionicons';
import { NavigationStackProp } from 'react-navigation-stack';
import { colors } from 'react-native-elements';
import { Styles } from '../styles/style';

type HeaderIconProp = {
    iconName: string,
    size?: number,
    navigation: NavigationStackProp,
    pageLink: string,
    back?: boolean
}

export const HeaderIcon: React.FC<HeaderIconProp> = (props) => (
    <TouchableOpacity
        onPress={() => (!props.back ? props.navigation.navigate(props.pageLink) : props.navigation.goBack())}
    >
        <Icon
            name={props.iconName}
            size={props.size ? props.size : 40}
            color={colors.success}
        />
    </TouchableOpacity>
);
