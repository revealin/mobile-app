import React from 'react';
import { StyleSheet } from 'react-native';
import { Colors} from 'react-native/Libraries/NewAppScreen';
import { transform } from '@babel/core';

export const AuthenticationStyles = StyleSheet.create({
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {                 
        flex: 1, 
        backgroundColor: Colors.white,
    },
    sectionContainer: {  
        flex: 2, 
        justifyContent: 'center',
        alignItems: 'center',  
        marginTop: 32,
        paddingHorizontal: 24,
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
  });

export const TriangleCorner = StyleSheet.create({ 
    triangle: { 
        width: 0, 
        height: 0, 
        backgroundColor: 'transparent', 
        borderStyle: 'solid', 
        borderRightWidth: 365, 
        borderTopWidth: 365, 
        borderRightColor: 'transparent', 
        borderTopColor: '#abe28e'
    },
    triangle2: {  
        position: 'absolute',
        bottom: 0,
        right: 0,       
        transform: [ {rotate: '180deg'} ]
    },
});

export const TriangleCornerRight = StyleSheet.create({ 

});