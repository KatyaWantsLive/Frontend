import { View, Button } from "react-native";
import styleHeaderLoginBtn from "./style/styleHeaderLoginBtn";

const HeaderLoginBtn = () => {
    return (
        <View style={styleHeaderLoginBtn.container}>
            <Button title="Привет, Гость"></Button>
        </View>
    )
}

export default HeaderLoginBtn