import { View } from "react-native"
import HeaderMain from "./HeaderMain"
import Map from "./MainMap"
import MainBottom from "./MainBottom"

const MainPage = () => {
    return (
        <View style={{height: '100%', width: '100%', backgroundColor: '#dddddd'}}>
            <HeaderMain />
            <Map />
            <MainBottom />
        </View>
    )
}

export default MainPage