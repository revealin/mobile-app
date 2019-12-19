import React from 'react';
import { StyleSheet } from 'react-native';
import { Colors} from 'react-native/Libraries/NewAppScreen';
import { transform } from '@babel/core';

export const UserProfileStyles = StyleSheet.create({
    body: {
        flex: 1,
        marginTop: 24,
    },
    title: {
        flex: 1,
    },
    titleText: {
        textAlign: 'center',
        fontSize: 18,
    },
    description: {
        flex: 3,
        elevation: 3
    },
    descriptionView: {
        marginTop: 10,
        height: 130,
        borderWidth: 0,
        elevation: 1,
        borderRadius: 20
    },
    photos: {
        flex: 4,
    },
    report: {
        paddingRight: 10,
        paddingLeft: 10,
        marginBottom: 15
    },
    paddingLR: {
        paddingLeft: 30,
        paddingRight: 30 
    },
    photosList: {
        flexDirection: 'column',
    },
    photoView: {
        flex: 1,
    },
    photo: {
        width: 90,
        height: 170
    }
});