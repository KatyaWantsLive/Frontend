import styleLinearGradientMain from "./styles/styleBackgraundLinearGradientMain";
import { LinearGradient } from "expo-linear-gradient";
import RegistrationAndLoginBtn from "./RegistrationAndLoginBtn";
import LoginForm from "./LoginForm";

const BackgraundLinearGradientMain = () => {
    return (
        <LinearGradient colors={['#F5EFFF', '#F5EFFF']} style={styleLinearGradientMain.sizeMain}>
            <RegistrationAndLoginBtn />
        </LinearGradient>
    )
}

export default BackgraundLinearGradientMain