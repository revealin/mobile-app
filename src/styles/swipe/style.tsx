import { StyleSheet } from 'react-native';
import { Colors} from 'react-native/Libraries/NewAppScreen';

export const SwipeStyles = StyleSheet.create({
    body: {
        flex: 1,
        marginTop: 24,
        paddingLeft: 13,
        paddingRight: 13,
        paddingBottom: 10
    },
    searchMenu: {
        flex: 1,
        borderWidth: 1,
        borderColor: "black"
    },
    searchTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 15
    },
    subSearchView: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center"
    },
    searchIcon: {
        marginRight: 10,
        marginTop: 5
    },
    swipe: {
        flex: 10,
        borderWidth: 1
    },
    description: {
        flex: 3,
        borderBottomWidth: 1,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        fontSize: 18,
        color: 'grey',
        lineHeight: 40
    },
    nameView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    nameText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    overlay: {
        flex: 1
    },
    overlayTitle: {
        flex: 1,
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18,
        borderBottomWidth: 2,
        borderColor: "black",
        borderBottomLeftRadius: 80,
        borderBottomRightRadius: 80
    },
    overlayAgeView: {
        flex: 2,
        marginTop: 10
    },
    overlaySliderValue: {
        textAlign: "center"
    },
    overlayGenderView: {
        flex: 5
    },
    overlayBtns: {
        flex: 1,
        flexDirection: "row"
    },
    overlayCloseBtnView: {
        flex: 1,
        marginRight: 7
    },
    overlaySearchBtn: {
        flex: 1,
        marginLeft: 7
    }
});
