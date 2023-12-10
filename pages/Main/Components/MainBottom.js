import { View, TextInput } from "react-native";
import styleMainBottom from "./style/styleMainBottom";

const MainBottom = () => {
    return (
        <View style={styleMainBottom.container}>
            <View style={styleMainBottom.containerTextInput}>
                <TextInput style={styleMainBottom.input} placeholder="Куда отправимся?"></TextInput>
            </View>
        </View>
    )
}

export default MainBottom