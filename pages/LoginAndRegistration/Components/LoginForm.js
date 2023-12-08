import { View, TextInput, Button } from "react-native";
import styleLoginForm from "./styles/styleLoginForm";
import axios from "axios";
import { useState } from "react";


const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const HandlerLogin = async () => {
        try {
            const response = await axios.post('https://jhdg-kjhdghj.onrender.com/user/login', {
                "username" : username,
                "password" : password
            });
            console.log('Ура мы молодцы', response.status);
        } catch (error) {
            console.error('Ошибка =(', error)
        }
    }
    return (
        <View style={styleLoginForm.container}>
            <TextInput placeholder="username" style={styleLoginForm.input} onChangeText={setUsername}></TextInput>
            <TextInput placeholder="password" style={styleLoginForm.input} onChangeText={setPassword}></TextInput>
            <View style={styleLoginForm.loginBtn}><Button title="Войти" style={styleLoginForm.loginBtn} color={'black'} onPress={HandlerLogin}></Button></View>
        </View>
    )
}

export default LoginForm