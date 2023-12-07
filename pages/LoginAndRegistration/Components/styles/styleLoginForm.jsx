import { StyleSheet } from "react-native";

const styleLoginForm = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '80%',
        height: '80%',
        backgroundColor: 'white',
    },

    input: {
        paddingLeft: 20,
        height: '20%',
        width: '80%',
        marginTop: 20,
        borderWidth: 1,
        borderRadius: 20,
    },

    loginBtn: {
        width: '50%',
        borderWidth: 1,
        marginTop: 20,
        borderRadius: '30%'
    }
})

export default styleLoginForm