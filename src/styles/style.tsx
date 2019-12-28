import { StyleSheet } from 'react-native';
import { Colors} from 'react-native/Libraries/NewAppScreen';

export const Styles = StyleSheet.create({    
    body: {                 
        flex: 1, 
        backgroundColor: Colors.white,   
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
        color: Colors.black,
    },
    content: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    switchLink: {
        marginTop: 15,
        color: 'blue',
        textDecorationLine: 'underline'
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
    paddingLR: {
        paddingLeft: 30,
        paddingRight: 30 
    },
});