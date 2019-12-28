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
    photoTitle: {
        marginBottom: 10
    },
    photosList: {
        flexDirection: 'column',
    },
    photoView: {
        flex: 1,
        marginLeft: 5
    },
    photo: {
        width: 90,
        height: 170
    },
    switchLink: {
        marginTop: 15,
        color: 'blue',
        textDecorationLine: 'underline'
    }
});