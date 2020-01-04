import { StyleSheet } from 'react-native';
import { Colors} from 'react-native/Libraries/NewAppScreen';
import { colors } from 'react-native-elements';

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
    chatTitle: {
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Roboto',
      fontSize: 30,
      // fontWeight: 'bold',
      color: '#bf78b2',
      marginBottom: 25         
    },
    matchTitle: {
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Roboto',
      fontSize: 30,
      // fontWeight: 'bold',
      color: '#bf78b2',
      marginBottom: 25         
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
      linearGradienText: {
        borderRadius: 4
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
      messageText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent'
      },
    switchLink: {
        marginTop: 15,
        color: 'blue',
        textDecorationLine: 'underline'
    },
    paddingLR: {
        paddingLeft: 30,
        paddingRight: 30 
    },
    headerLeft: {
      flex: 1,
      marginLeft: 20,
      color: colors.success
    },
    headerMid: {
      flex: 1,
      textAlign: "center",
      color: "#abe28e",
      fontWeight: "bold",
      fontSize: 24
    },
    headerRight: {
      flex: 1,
      marginRight: 20
    },
    headerBackTitleStyle: {
      color: "#abe28e",
      marginLeft: 10,
      fontWeight: "bold",
      fontSize: 18
    },
    headerBack: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
    }
});