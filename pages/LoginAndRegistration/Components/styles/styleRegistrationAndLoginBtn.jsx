import { StyleSheet } from "react-native";

const styleRegistrationAndLoginBtn = StyleSheet.create({
    container: {
        width: '80%',
        height: '10%',
        backgroundColor: '#ededed',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopLeftRadius: '30%',
        borderTopEndRadius: '30%',
        borderWidth: 1,
    },
    registrationBtn: {
        width: '50%',
        borderTopEndRadius: '30%'
        
    },
    loginBtn: {
        width: '50%',
        backgroundColor: 'white',
        borderTopLeftRadius: '30%',
        borderTopEndRadius: '30%',
    }
})

export default styleRegistrationAndLoginBtn