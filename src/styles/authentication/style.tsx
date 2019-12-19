import React from 'react';
import { StyleSheet } from 'react-native';
import { Colors} from 'react-native/Libraries/NewAppScreen';
import { transform } from '@babel/core';

export const AuthenticationStyles = StyleSheet.create({
    engine: {
        position: 'absolute',
        right: 0,
    },
    highlight: {
        fontWeight: '700',<)
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
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