import { View, Button } from "react-native";
import styleHeaderLoginBtn from "./style/styleHeaderLoginBtn";
import { user } from "../../../dataStorage/parsejson";

const HeaderLoginBtn = () => {
    return (
        <View style={styleHeaderLoginBtn.container}>
            <Button title='привет, гость' ></Button>
        </View>
    )
}

export default HeaderLoginBtn