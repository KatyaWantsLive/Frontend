import { View, } from "react-native";
import stylesMain from "./styles/styleMain";
import BackgraundLinerGradientHeader from "./BackgraundLinearGradientHeader";
import BackgraundLinearGradientMain from "./BackgraundLinearGradientMain";

const LoginAndRegMain = () => {
  return ( 
    <View style={stylesMain.continer}>
      <BackgraundLinerGradientHeader />
      <BackgraundLinearGradientMain />
    </View>
  )
}

export default LoginAndRegMain