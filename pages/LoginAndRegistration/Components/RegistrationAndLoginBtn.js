import { View, Button } from "react-native";
import styleRegistrationAndLoginBtn from "./styles/styleRegistrationAndLoginBtn";

const RegistrationAndLoginBtn = () => {
    return (
        <View style={styleRegistrationAndLoginBtn.container}>
            <View style={styleRegistrationAndLoginBtn.loginBtn}><Button title="Login"></Button></View>
            <View style={styleRegistrationAndLoginBtn.registrationBtn}><Button title="Registration"></Button></View>
        </View>
    )
}

export default RegistrationAndLoginBtn

