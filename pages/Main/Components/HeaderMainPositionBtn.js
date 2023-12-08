import { View, Button } from "react-native";
import styleHeaderMainPositionBtn from "./style/styleHeaderMainPositionBtn";

const HeaderMainPositionBtn = () => {
    return (
        <View style={styleHeaderMainPositionBtn.container}>
            <Button title="." style={{height: '100%', width: '100%'}}></Button>
        </View>
    )
}

export default HeaderMainPositionBtn