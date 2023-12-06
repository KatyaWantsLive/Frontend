import styleLinearGradientMain from "./styles/styleBackgraundLinearGradientMain";
import { LinearGradient } from "expo-linear-gradient";

const BackgraundLinearGradientMain = () => {
    return (
        <LinearGradient colors={['#F5EFFF', '#F5EFFF']} style={styleLinearGradientMain.sizeMain}></LinearGradient>
    )
}

export default BackgraundLinearGradientMain