import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';

import { Styles } from '../../styles/style';


export class DescriptionComponent extends Component {
    render() {
        return (
            <View style={[Styles.description, Styles.paddingLR]}>
                <Text>Description</Text>
                <View style={Styles.descriptionView}>
                    <TextInput
                        underlineColorAndroid='transparent'
                        textAlignVertical='top'
                        multiline = {true}
                        numberOfLines = {8}
                        editable
                        maxLength={500}
                    />
                </View>
            </View>
        )
    }
}