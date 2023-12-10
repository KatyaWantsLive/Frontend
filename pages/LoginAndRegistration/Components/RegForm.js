import { useState } from "react";
import { View, TextInput, Button } from "react-native";
import styleRegForm from "./styles/styleRegForm";
import axios from "axios";

const RegForm = () => {
    const [yourname, setYourname] = useState('');
    const [username, setUsername] = useState('');
    const [number, setNumber] = useState('');
    const [password, setPassword] = useState('')

    const HandleRegistration = async () => {
        console.log(username)
        try {
            const response = await axios.post('https://jhdg-kjhdghj.onrender.com/user/register', {
                "username": username,
                "name": yourname,
                "phone_number": number,
                "password": password,
            });
            console.log('Данные успешно отправлены', response.data, password);
        } catch (error) {
            console.error('Ошибка отправки данных', error);
        }
    }

    return (
        <View style={styleRegForm.container}>
            <TextInput placeholder="username" style={styleRegForm.input} onChangeText={setUsername}></TextInput>
            <TextInput placeholder="name" style={styleRegForm.input} onChangeText={setYourname}></TextInput>
            <TextInput placeholder="+7 (***) *** **-**" style={styleRegForm.input} onChangeText={setNumber}></TextInput>
            <TextInput placeholder="password" style={styleRegForm.input} onChangeText={setPassword} secureTextEntry={true}></TextInput>
            <View style={styleRegForm.loginBtn}><Button title="Зарегистрироваться" style={styleRegForm.loginBtn} color={'black'} onPress={HandleRegistration}></Button></View>
        </View>
    )
}

export default RegForm