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
        borderTopWidth: 0.5,
        borderEndWidth: 0.5,
        borderStartWidth: 0.5,
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