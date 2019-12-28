import { StyleSheet } from 'react-native';
import { Colors} from 'react-native/Libraries/NewAppScreen';

export const Styles = StyleSheet.create({    
    body: {                 
        flex: 1, 
        backgroundColor: Colors.white   
    },
    flexSecond: {  
        flex: 2, 
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.white,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 1,
        shadowRadius: 3.84,

        elevation: 5,
    },
    flexThird: {
      flex: 3, 
      // Centrage du block flex 3 
      marginLeft: 30, 
      marginRight: 30, 
      marginBottom: 100,
      // Créer une + haute séparation entre le flex 2 et le flex 3
      // backgroundColor: '#FFA500'
    },
    title: {
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Roboto',
      fontSize: 70,
      fontWeight: 'bold',
      color: '#bf78b2'         
    },
    subTitle: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    label: {
       marginLeft: 10,
        fontSize: 20,
        fontWeight: '400',
        color: '#bf78b2'
    },
    input: {
      height: 40, 
      borderColor: '#abe28e', 
      borderWidth: 1
    },
    separator: {
        marginVertical: 25,
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