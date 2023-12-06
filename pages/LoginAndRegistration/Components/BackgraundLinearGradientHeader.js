import styleBackgroundLinearGradientHeader from "./styles/styleBackgraundLinearGradientHeader";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import BackBtn from "./BackBtn";
import HeaderIcons from "./HeaderIcons";

const BackgraundLinerGradientHeader = () => {
    return (
        <LinearGradient colors={['#8da9e0', '#e48ff2', '#F5EFFF']} style={styleBackgroundLinearGradientHeader.sizeHeader}>
            <BackBtn />
            <View style={styleBackgroundLinearGradientHeader.icons}>
                <HeaderIcons />
            </View>
        </LinearGradient>
    )
}

export default BackgraundLinerGradientHeader