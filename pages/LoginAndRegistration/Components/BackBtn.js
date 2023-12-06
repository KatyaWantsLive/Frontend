import { View, Button } from "react-native";
import styleBackBtn from "./styles/styleBackBtn";

const BackBtn = () => {
    return (
        <View style={styleBackBtn.container}>
            <Button title="Назад"></Button>
        </View>
    )
}

export default BackBtn