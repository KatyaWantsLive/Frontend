import { View } from "react-native"
import HeaderMain from "./HeaderMain"
import Map from "./MainMap"

const MainPage = () => {
    return (
        <View style={{height: '100%', width: '100%'}}>
            <HeaderMain />
            <Map />
        </View>
    )
}

export default MainPage