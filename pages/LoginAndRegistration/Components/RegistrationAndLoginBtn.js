import { View, Button} from "react-native";
import styleRegistrationAndLoginBtn from "./styles/styleRegistrationAndLoginBtn";

const LoginPress = () => {
    console.log('разраб пидор')
}

const RegPress = () => {
    console.log('когда патч в доте')
}

const RegistrationAndLoginBtn = () => {
    return (
        <View style={styleRegistrationAndLoginBtn.container}>
            <View style={styleRegistrationAndLoginBtn.loginBtn}><Button title="Login" onPress={LoginPress} color={'black'}></Button></View>
            <View style={styleRegistrationAndLoginBtn.registrationBtn}><Button title="Registration" onPress={RegPress} color={'black'}></Button></View>
        </View>
    )
}

export default RegistrationAndLoginBtn

