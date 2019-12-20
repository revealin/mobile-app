import { StyleSheet } from 'react-native';
import { Colors} from 'react-native/Libraries/NewAppScreen';

export const Styles = StyleSheet.create({    
    body: {                 
        flex: 1, 
        backgroundColor: Colors.white   
    },
    sectionContainer: {  
        flex: 2, 
        marginTop: 32,
        paddingHorizontal: 24,
        backgroundColor: Colors.blue,
             
    },
    title: {
        justifyContent: 'center',
        alignItems: 'center',  
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black
    },
    content: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth
      },
      linearGradientButton: {
        paddingLeft: 15,
        paddingRight: 15
        // borderRadius: 0
      },
      linearGradientIcon: {
        borderRadius: 100
      },
      buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent'
      },
    switchLink: {
        marginTop: 15,
        color: 'blue',
        textDecorationLine: 'underline'
    }
});