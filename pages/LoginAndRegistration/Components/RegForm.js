import { View, TextInput, Button } from "react-native";
import styleRegForm from "./styles/styleRegForm";

const RegForm = () => {
    return (
        <View style={styleRegForm.container}>
            <TextInput placeholder="@yourname" style={styleRegForm.input}></TextInput>
            <TextInput placeholder="username" style={styleRegForm.input}></TextInput>
            <TextInput placeholder="+7 (***) *** **-**" style={styleRegForm.input}></TextInput>
            <TextInput placeholder="password" style={styleRegForm.input}></TextInput>
            <View style={styleRegForm.loginBtn}><Button title="Войти" style={styleRegForm.loginBtn} color={'black'}></Button></View>
        </View>
    )
}

export default RegForm