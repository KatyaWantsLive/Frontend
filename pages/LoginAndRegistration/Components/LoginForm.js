import { View, TextInput, Button } from "react-native";
import styleLoginForm from "./styles/styleLoginForm";


const LoginForm = () => {
    return (
        <View style={styleLoginForm.container}>
            <TextInput placeholder="username" style={styleLoginForm.input}></TextInput>
            <TextInput placeholder="password" style={styleLoginForm.input}></TextInput>
            <View style={styleLoginForm.loginBtn}><Button title="Войти" style={styleLoginForm.loginBtn}></Button></View>
        </View>
    )
}

export default LoginForm