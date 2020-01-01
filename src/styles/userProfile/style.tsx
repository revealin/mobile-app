import React from 'react';
import { StyleSheet } from 'react-native';
import { colors } from 'react-native-elements';
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
    descriptionView: {
        marginTop: 10,
        height: 130,
        borderWidth: 0,
        elevation: 1,
        borderRadius: 5
    },
    description: {
        flex: 3,
        elevation: 3
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
        marginLeft: 6
    },
    photo: {
        width: 90,
        height: 170
    },
    emptyPhoto: {
        borderWidth: 1,
        borderColor: colors.success,
        backgroundColor: colors.grey5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    deleteIcon: {
        position: "absolute",
        right: 3,
        top: -1,
        padding: 2,
        paddingLeft: 8,
        paddingRight: 8,
        backgroundColor: "white",
        borderRadius: 40,
        borderTopEndRadius: 2,
    },
    switchLink: {
        marginTop: 15,
        color: 'blue',
        textDecorationLine: 'underline'
    },
    saveBtn: {
        paddingRight: 10,
        paddingLeft: 10,
        marginBottom: 15
    }
});