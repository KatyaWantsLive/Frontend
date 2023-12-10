import { View, Button, Image } from "react-native";
import styleHeaderMainPositionBtn from "./style/styleHeaderMainPositionBtn";



const HeaderMainPositionBtn = () => {


    return (
        <View style={styleHeaderMainPositionBtn.container}>
            <Button title='.' style={{height: '100%', width: '100%'}} color={'black'}></Button>
        </View>
    )
}

export default HeaderMainPositionBtn