import { useState } from "react";
import { View, Button, Text, VirtualizedList} from "react-native";
import styleRegistrationAndLoginBtn from "./styles/styleRegistrationAndLoginBtn";
import LoginForm from "./LoginForm";
import RegForm from "./RegForm";


const RegistrationAndLoginBtn = () => {
    const [isLogin, setIsLogin] = useState(true);
    
    const LoginPress = () => {
        setIsLogin(true)
    }

    const RegPress = () => {
        setIsLogin(false)
    }

    return (
        <View style={{ height: '100%'}}>
            {isLogin ? (
                <View style={{height: '100%', width: '100%'}}>
                    <View style={styleRegistrationAndLoginBtn.container}>
                        <View style={styleRegistrationAndLoginBtn.loginBtn}><Button title='Логин' color='black' onPress={LoginPress}></Button></View>
                        <View style={styleRegistrationAndLoginBtn.registrationBtn}><Button title='Регистрация' color='black' onPress={RegPress}></Button></View>
                    </View>
                    <View><LoginForm></LoginForm></View>
                </View>
            ) : (
                <View style={{height: '100%', width: '100%'}}>
                    <View style={styleRegistrationAndLoginBtn.container}>
                        <View style={styleRegistrationAndLoginBtn.loginBtn}><Button title='Регистрация' color='black' onPress={RegPress}></Button></View>
                        <View style={styleRegistrationAndLoginBtn.registrationBtn}><Button title='Логин' color='black' onPress={LoginPress}></Button></View>
                    </View>
                    <View><RegForm></RegForm></View>
                </View>
            )}
        </View>        
    )
}

export default RegistrationAndLoginBtn

