import { View } from "react-native";
import styleHeaderMain from "./style/styleHeaderMain";
import HeaderMainPositionBtn from "./HeaderMainPositionBtn";
import HeaderLoginBtn from "./HeaderLoginBtn";

const HeaderMain = () => {
    return (
        <View style={styleHeaderMain.container}>
            <View style={{width: '100%', flex: 1, alignItems: 'center', flexDirection: 'row', justifyContent: 'center'}}>
                <HeaderMainPositionBtn />
                <HeaderMainPositionBtn />
            </View>
            <View style={{width: '50%', flex: 1, alignItems: 'center', flexDirection: 'row', justifyContent: 'center'}}>
                <HeaderLoginBtn />
            </View>
        </View>
    )
}

export default HeaderMain