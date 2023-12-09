import React from "react";
import { View, TextInput, Button } from "react-native";
import styleLoginForm from "./styles/styleLoginForm";
import axios from "axios";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();
    
    
    const HandlerLogin = async () => {
        try {
            const response = await axios.post('https://jhdg-kjhdghj.onrender.com/user/login', {
                "username" : username,
                "password" : password
            });
            if (response.status === 200) {
                setUsername('')
                setPassword('')
                console.log('ебанты')
                navigation.navigate('Main')
            } else {
                console.log('я пидор')
            }
        } catch (error) {
            console.error('Ошибка =(', error);
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

export default LoginForm;