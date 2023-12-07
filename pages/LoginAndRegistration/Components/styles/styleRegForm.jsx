import { StyleSheet } from "react-native";

const styleRegForm = StyleSheet.create ({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '94%',
        backgroundColor: 'white',
        borderBottomWidth: 0.5,
        borderEndWidth: 0.5,
        borderStartWidth: 0.5,
        borderEndEndRadius: 30,
        borderEndStartRadius: 30,
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.8,
        // shadowRadius: 2,
    },

    input: {
        paddingLeft: 20,
        height: '10%',
        width: '80%',
        marginTop: 30,
        borderWidth: 1,
        borderRadius: 10,
    },

    loginBtn: {
        width: '80%',
        borderWidth: 1,
        marginTop: 30,
        borderRadius: '10%'
    }

})

export default styleRegForm