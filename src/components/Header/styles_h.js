import { StyleSheet } from "react-native";


const styles_h = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        alignItems: 'center',
        flexDirection: 'row',
        color: '#000',
        fontSize: 18,
        backgroundColor: '#ffffff',
        borderBottomColor: '#C1C1C1',
        borderBottomWidth: 1,
        paddingTop: 40,
        padding: 5


    },
    appIcon: {
        padding: 20,
        width: 35,
        height: 35,
        marginStart: 30,
        marginBottom: 5,
        marginTop: 5,


    },

    appName: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    userName: {
        color: 'black',
        fontSize: 16,
        marginLeft: 10,
    },
});

export default styles_h;